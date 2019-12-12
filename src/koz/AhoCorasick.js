/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: kol
 * Original author: Daniel Glazman
 */

class AhoCorasickTrieNode {

  constructor(aValue) {

    this.mValue = aValue;
    this.mChildren = null;
    this.final = false;
  }

  get value() {
    return this.mValue;
  }

  get children() {
    return this.mChildren;
  }

  get childCount() {
    return this.mChildren
           ? this.mChildren.length
           : 0;
  }

  hasChild(aValue) {
    if (!aValue) {
      throw Error("AhoCorasickTrieNode::hasChild: invalid value");
    }

    return this.mChildren
           ? this.mChildren.some((aChild) => aChild.value == aValue)
           : false;
  }

  getChild(aValue) {
    if (!aValue) {
      throw Error("AhoCorasickTrieNode::getChild: invalid value");
    }

    return this.mChildren
           ? this.mChildren.find((aChild) => aChild.value == aValue)
           : null;
  }

  addChild(aValue) {
    if (!aValue) {
      throw Error("AhoCorasickTrieNode::addChild: invalid value");
    }

    if (!this.mChildren) {
      this.mChildren = [];
    }

    const child = new AhoCorasickTrieNode(aValue);
    this.mChildren.push(child);
    return child;
  }

  find(aValue) {
    if (this.value) {
      throw Error("AhoCorasickTrieNode::find: context is not the root of the trie");
    }

    let comparator = "";
    let frontLine = this;
    for (let i = 0; i < aValue.length; i++) {
      comparator += aValue[i];
      const child = frontLine.getChild(comparator);
      if (!child) {
        return null;
      }

      frontLine = child;
    }

    return frontLine;
  }
}

class AhoCorasick {

  constructor(aNeedleArray) {
    if (!Array.isArray(aNeedleArray)) {
      throw Error("AhoCorasick::constructor: argument is not an array");
    }

    this.mTrie = new AhoCorasickTrieNode("");

    aNeedleArray.forEach((aNeedle) => {
      let frontLine = this.mTrie;

      for (let i = 0; i < aNeedle.length; i++) {
        const c = aNeedle[i];

        if (frontLine) {
          const newValue = frontLine.value + c;
          if (frontLine.hasChild(newValue)) {
            frontLine = frontLine.getChild(newValue);
          }
          else {
            const child = frontLine.addChild(newValue);
            frontLine = child;
          }
        }
        else {
          frontLine = this.mTrie.addChild(c);
        }
      }

      frontLine.final = true;
    });

    this.setBacklinkForNode(this.mTrie);
  }

  setBacklinkForNode(aNode) {
    if (!aNode.value
        || aNode.value.length == 1) {
      aNode.backlink = aNode;
    }
    else {
      let comparator = aNode.value;
      let child = null;
      do {
        comparator = comparator.substring(1);
        child = this.mTrie.find(comparator);
      }
      while (comparator && !child);

      aNode.backlink = child ? child : this.mTrie;
    }

    if (aNode.childCount) {
      aNode.children.forEach((aChildNode) => {
        this.setBacklinkForNode(aChildNode);
      });
    }
  }

  search(aString) {
    const results = [];

    let states = [];
    for (let i = 0; i < aString.length; i++) {
      let c = aString[i];
      states.push( this.mTrie );

      const newStates = [];
      states.forEach((aState) => {
        const newValue = aState.value + c;
        const child = aState.getChild(newValue);
        if (child) {
          newStates.push(child);
          if (child.final) {
            results.push( { needle: child.value, endOffset: i}) ;
          }
        }
      });
      states = newStates;
    }

    results.sort((a, b) => {
      if (a.needle.length > b.needle.length) {
        return -1;
      }
      if (a.needle.length < b.needle.length) {
        return +1;
      }

      if (a.endOffset > b.endOffset) {
        return +1;
      }
      if (a.endOffset < b.endOffset) {
        return -1;
      }

      return 0;
    });

    results.forEach((aResult) => {
      console.log("#### AhoCorasick: " + aResult.needle + " " + aResult.endOffset);
    });
    return results;
  }
}
