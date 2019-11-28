/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: kol
 * Original author: Daniel Glazman
 */


class Utils {

  static getRightBottomCornerPosition(aElement) {
    if (!(aElement instanceof Element))
      throw Error('getRightBottomCornerPosition: no element');

    const boundingRect = aElement.getBoundingClientRect();
    return {
      x: boundingRect.x + boundingRect.width,
      y: boundingRect.y + boundingRect.height
    }
  }

  static isVisible(aElement) {
    // Source: https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
    // warning, original StackOverflow code has a big bug; the code below fixes it

    if (!(aElement instanceof Element))
      throw Error('isVisible: no element');

    const boundingRect = aElement.getBoundingClientRect();
    const style = window.getComputedStyle(aElement);
    if ("none" == style.display
        || "visible" != style.visibility
        || 0.1 > style.opacity
        || 0 == aElement.offsetWidth + aElement.offsetHeight
                + boundingRect.width + boundingRect.height)
      return false;

    const elemCenter   = {
        x: boundingRect.left + aElement.offsetWidth / 2,
        y: boundingRect.top + aElement.offsetHeight / 2
    };
    if (elemCenter.x < 0
        || elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)
        || elemCenter.y < 0
        || elemCenter.y > (document.documentElement.clientHeight || window.innerHeight))
      return false;

    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === aElement)
        return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
  }

  static buildEnumFromArray(aArray) {
    if (!Array.isArray(aArray)) {
      throw Error('buildEnumFromArray: argument is not an array');
    }

    return aArray.reduce((aAcc, aValue) => {
      aAcc[aValue] = aValue.toUpperCase();
      return aAcc;
    }, {});
  }

  static getMostProbableLabel(aInputElement) {
    if (aInputElement.hasAttribute("id") || aInputElement.hasAttribute("name")) {
      const name = aInputElement.getAttribute("id") || aInputElement.getAttribute("name");
      const label = document.querySelector("*[for='" + name + "']");
      if (label) {
        return label.textContent;
      }
    }

    const boundingRect = aInputElement.getBoundingClientRect();
    const topCenter   = {
        x: boundingRect.left + aInputElement.offsetWidth / 2,
        y: boundingRect.top - 5
    };
    const leftCenter   = {
      x: boundingRect.left - 5,
      y: boundingRect.top + aInputElement.offsetHeight / 2
    };
    const leftCenterInside   = {
      x: boundingRect.left + 20,
      y: boundingRect.top + aInputElement.offsetHeight / 2
    };

    const leftCenterInsideElement = document.elementFromPoint(leftCenterInside.x, leftCenterInside.y);
    if (leftCenterInsideElement) {
      // material design case...
      return leftCenterInsideElement.textContent.trim() + " ";
    }

    const beforeElement = document.elementFromPoint(leftCenter.x, leftCenter.y);
    const aboveElement  = document.elementFromPoint(topCenter.x, topCenter.y);
    let rv = "";
    if (beforeElement) {
      rv += beforeElement.textContent.trim() + " ";
    }
    if (aboveElement) {
      rv += aboveElement.textContent.trim();
    }

    return rv;
  }
}
