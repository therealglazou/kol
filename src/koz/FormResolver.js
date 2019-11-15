/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: kol
 * Original author: Daniel Glazman
 */

class FormResolver {

  constructor() {
    this.kFORM_FIELDS_SELECTOR = "input:not([type='hidden'])";
    this.kFORM_SELECTOR = "form";
    this.kPADDING = 150;

    this.resolve();
  }

  /*
   * trivial Rect intersection checker
   */
  intersectRect(aRect1, aRect2) {
    return !(aRect2.left > aRect1.right
             || aRect2.right < aRect1.left
             || aRect2.top > aRect1.bottom
             || aRect2.bottom < aRect1.top);
  }

  createBoundingBox(aInfoSet) {
    return {
      elements: [ aInfoSet ],
      left: aInfoSet.left,
      top: aInfoSet.top,
      right: aInfoSet.right,
      bottom: aInfoSet.bottom,
    };
  }

  extendBoundingBox(aBoundingBox, aInfoSet) {
    aBoundingBox.elements.push(aInfoSet);
    aBoundingBox.left   = Math.min(aBoundingBox.left,   aInfoSet.left);
    aBoundingBox.top    = Math.min(aBoundingBox.top ,   aInfoSet.top);
    aBoundingBox.right  = Math.max(aBoundingBox.right,  aInfoSet.right);
    aBoundingBox.bottom = Math.max(aBoundingBox.bottom, aInfoSet.bottom);
  }

  getPaddedBoundingBox(aBoundingBox) {
    return {
      left: aBoundingBox.left - this.kPADDING,
      top: aBoundingBox.top - this.kPADDING,
      right: aBoundingBox.right + this.kPADDING,
      bottom: aBoundingBox.bottom + this.kPADDING
    };
  }

  /*
   * full body of the resolver
   */
  resolve() {
    const inputElementsWithoutForm = [...document.querySelectorAll(this.kFORM_FIELDS_SELECTOR)]
      // keep only visible ones without a form
      .filter(aInput => !aInput.form && Utils.isVisible(aInput))
      // map to an array of elemen+boundingbox
      .map(aInput => {
        const position = aInput.getBoundingClientRect();
        return {
                 element: aInput,
                 left: position.x,
                 top: position.y,
                 right: position.x + position.width,
                 bottom: position.y + position.height
               };
      })
      // sanity filter
      .filter(aInfoSet => aInfoSet.right && aInfoSet.bottom);

    // look for pseudo-forms
    const inputElementSets = [];
    inputElementsWithoutForm.reduce((aAccumulator, aInfoSet) => {
      const index = aAccumulator.findIndex((aBoundingBox) => {
        return this.intersectRect(aInfoSet, this.getPaddedBoundingBox(aBoundingBox));
      });

      if (index == -1) {
        // it does not intersect with any already padded known bounding box so
        // let's create a new bounding box
        aAccumulator.push( this.createBoundingBox(aInfoSet) );
      }
      else {
        // it does intersect, let's extend the intersecting bounding box
        this.extendBoundingBox(aAccumulator[index], aInfoSet);
      }

      return aAccumulator;
    }, inputElementSets);

    // first populate the result with visible real form elements
    const formElements = [...document.querySelectorAll(this.kFORM_SELECTOR)]
                                 .filter(aForm => Utils.isVisible(aForm));

    // then look for pseudo-forms as ancestors of bounding boxes' elements
    inputElementSets.forEach((aBoundingBox) => {
      if (!aBoundingBox.elements.length) {
        // sanity case
        return;
      }

      if (aBoundingBox.elements.length == 1) {
        // trivial case if we have only one form field
        formElements.push( aBoundingBox.elements[0].element.parentNode );
        return;
      }

      // get all ancestors of the first element in the bounding box
      let elt = aBoundingBox.elements[0].element;
      const ancestors = [];
      while (elt.parentNode) {
        ancestors.unshift(elt.parentNode);
        elt = elt.parentNode;
      }

      // then match with the ancestors of others
      for (let i = 1; i < aBoundingBox.elements.length; i++) {
        elt = aBoundingBox.elements[i].element;
        while (elt.parentNode) {
          const index = ancestors.indexOf(elt.parentNode);
          if (index != -1) {
            // we have a match, clip the list of ancestors there
            ancestors.splice(index + 1, aBoundingBox.elements.length);
            break;
          }
          elt = elt.parentNode;
        }
      }

      // get the deepest ancestor and call it a pseudo-form
      formElements.push(ancestors[ancestors.length - 1]);
    });

    return formElements;
  }
}
