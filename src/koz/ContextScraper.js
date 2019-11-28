/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: kol
 * Original author: Daniel Glazman
 */

class ContextScraper {

  constructor() {
    this.kDIACRITICS_TRANSLITERATIONS = {
      "ä": "ae",
      "æ": "ae",
      "ǽ": "ae",
      "ö": "oe",
      "œ": "oe",
      "ü": "ue",
      "Ä": "A",
      "Ü": "Ue",
      "Ö": "Oe",
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Å": "A",
      "Ǻ": "A",
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "Ǎ": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "å": "a",
      "ǻ": "a",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "ǎ": "a",
      "ª": "a",
      "Ç": "C",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ç": "c",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ð": "D",
      "Ď": "D",
      "Đ": "D",
      "ð": "d",
      "ď": "d",
      "đ": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Ǐ": "I",
      "Į": "I",
      "İ": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "ǐ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ñ": "N",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "ñ": "n",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŉ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ō": "O",
      "Ŏ": "O",
      "Ǒ": "O",
      "Ő": "O",
      "Ơ": "O",
      "Ø": "O",
      "Ǿ": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ō": "o",
      "ŏ": "o",
      "ǒ": "o",
      "ő": "o",
      "ơ": "o",
      "ø": "o",
      "ǿ": "o",
      "º": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "ſ": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "Ư": "U",
      "Ǔ": "U",
      "Ǖ": "U",
      "Ǘ": "U",
      "Ǚ": "U",
      "Ǜ": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "ư": "u",
      "ǔ": "u",
      "ǖ": "u",
      "ǘ": "u",
      "ǚ": "u",
      "ǜ": "u",
      "Ý": "Y",
      "Ÿ": "Y",
      "Ŷ": "Y",
      "ý": "y",
      "ÿ": "y",
      "ŷ": "y",
      "Ŵ": "W",
      "ŵ": "w",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Æ": "AE",
      "Ǽ": "AE",
      "ß": "ss",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "OE",
      "ƒ": "f"
    };

    this.kATTRIBUTE_RULES = {
      fullNames: [
        "style"
      ],
      startPatterns: [
        "ng-",
        "data-kol"
      ],
      preserve: [
        "ng-class",
        "ng-name",
        "ng-id"
      ]
    };

    this.kMINIMAL_IDENT_LENGTH = 3;
  }

  /*
   * Transliterate diacritics in a string argument
   * Unfortunately, there's no superfast way to do that.
   */
  transliterateDiacritics(aString) {
    let noDiacriticsRv = "";
    const l = aString.length;
    for (let i = 0; i < l; i++) {
      const c = aString[i];
      const replacement = this.kDIACRITICS_TRANSLITERATIONS[c];
      noDiacriticsRv += replacement ? replacement : c;
    }

    return noDiacriticsRv
             // keep ascii letters only
             .replace( /[^a-zA-Z]/g ,           " ")
             // split at camel case limits
             .replace( /([a-z])([A-Z])/g ,      "$1 $2")
             // split at uppercase identifiers' limits
             .replace( /([A-Z])([A-Z][a-z])/g , "$1 $2")
             // coalesce multiple ws
             .replace( /\s+/g,                  " ")
             // normalize to lc
             .toLowerCase()
             // get rid of leading and trailing ws
             .trim();
  }

  /*
   * Gather prose data about a given element. Outputs a string or a map
   * of weights
   */
  aggregateContent(aElement, aMapOutput = false) {
    let rv = "";

    // care for the placeholder attribute
    if (aElement.hasAttribute("placeholder") && aElement.getAttribute("placeholder")) {
      // if we have a placeholder attribute, rely on it, and id/name
      // because other attributes could introduce some bias
      rv = aElement.getAttribute("placeholder") + " ";
      rv = rv.repeat(5);

      if (aElement.id) {
        rv + aElement + " ";
      }

      if (aElement.hasAttribute("name")) {
        rv += aElement.getAttribute("name") + " ";
      }
    }
    else {
      // no placeholder, let's look at all attributes
      const attributes = aElement.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const name = attributes[i].name;
        const value = attributes[i].value;

        // is it an attribute we explicitly reject?
        if (this.kATTRIBUTE_RULES.fullNames.includes(name))
          continue;

        const rejectedByPattern = this.kATTRIBUTE_RULES.startPatterns.some((aPattern) => {
          return name.startsWith(aPattern);
        });

        if (rejectedByPattern
            && !this.kATTRIBUTE_RULES.preserve.includes(name)) {
          // it's rejected by pattern but not listed as preserved
          continue;
        }

        if (value.includes("{") || value.includes(";")) {
          // assume it contains code so drop it
          continue;
        }

        rv += value + " ";
      }

      // then the label
      rv += Utils.getMostProbableLabel(aElement).repeat(5);
    }

    // iterate through CharacterData nodes
    // XXX what about ProcessingInstructions?
    const nodeIterator = document.createNodeIterator(aElement,
      NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
      null);

    let currentNode = null;
    let currentParentNode = null;
    // cache results of calls to |Utils.IsVisible()| because of its high cost
    let currentParentVisibility = false;

    while (currentNode = nodeIterator.nextNode()) {
      if (currentNode.parentNode != currentParentNode) {
        currentParentNode = currentNode.parentNode;
        currentParentVisibility = Utils.isVisible(currentParentNode);
      }

      if (currentParentVisibility) {
        // add text only if the enclosing element is visible
        rv += currentNode.data + " ";
      }
    }

    // clean the string up and limit results to strings of a minimal given length
    rv = this.transliterateDiacritics(rv)
           .split(" ")
           .sort()
           .filter(word => word.length >= this.kMINIMAL_IDENT_LENGTH);

    if (aMapOutput) {
      // switch to a map of weights
      return rv.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    }

    return rv.join(" ");
  }
}
