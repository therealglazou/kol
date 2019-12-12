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
  }

  get value() {
    return this.mValue;
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
      throw Error("AhoCorasickTrieNode::find: origin is not the root of the trie");
    }

    let comparator = "";
    let frontLine = this;
    for (let i = 0; i < aValue.length; i++) {
      comparator += aValue[i];
      const child = frontLine.getChild(comparator);
      if (!child) {
        return this;
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
    });
  }

  search(aString) {
  }
}
