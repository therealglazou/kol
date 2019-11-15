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
    // warning, code there has a big bug ; the code below fixes it

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
}
