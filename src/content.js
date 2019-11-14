/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: Password Strength Indicator
 * Original author: Daniel Glazman
 */

class StrengthIndicatorContent {

  constructor() {

    // gather response constants
    this.kCOMPROMISED = ["#404040", "compromised"];
    this.kVERY_WEAK   = ["red",     "veryWeak"];
    this.kWEAK        = ["orange",  "weak"];
    this.kGOOD        = ["green",   "good"];

    // Tweak the following lines to change the responses for response scores
    // from -1 to 4
    this.kRESPONSES = [
      this.kCOMPROMISED,
      this.kVERY_WEAK,
      this.kVERY_WEAK,
      this.kWEAK,
      this.kWEAK,
      this.kGOOD
    ];

    this.kSIC_ATTRIBUTE = "data-strength-indicator";

    this.inputTimeOut = null;
    this.currentInputElement = null;

    // first pass on existing password fields
    this.processAllPasswordInputs();

    // then we need to care about dynamically added password fields
    this.observer = new MutationObserver(
        (aMutationList) => {
          this.processAllPasswordInputs();
      });

    let config = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'hidden', 'script', 'aria-invalid', 'aria-hidden']
    };

    this.observer.observe(document.body || document.documentElement, config);

    // finally, we need a holder for the prose that will show up when the
    // user types a password
    this.warningElement           = document.createElement("span");
    this.warningElement.id        = "StrengthIndicatorWarning";
    this.warningElement.className = "hidden";
    document.body.appendChild(this.warningElement);
  }

  /*
   * Make sure that each and every password field in the document has
   * attached behaviours
   */
  processAllPasswordInputs() {
    // get all password fields
    const elements = document.querySelectorAll("input[type='password']");

    // iterate
    [...elements].forEach((aElement) => {
      if (aElement.hasAttribute(this.kSIC_ATTRIBUTE)) {
        // early way out if we already processed that element
        return;
      }

      // make sure we don't process that element twice
      aElement.setAttribute(this.kSIC_ATTRIBUTE, true);

      // show our UI thingies again when a password field gains focus
      aElement.addEventListener("focus",  (aEvent) => { this.onFocus(aEvent); }, false);
      // make sure we capture all changes in the field's value
      aElement.addEventListener("input",  (aEvent) => { this.processInputEvent(aEvent); }, false);
      aElement.addEventListener("change", (aEvent) => { this.processInputEvent(aEvent); }, false);
      // we want to hide our UI thingies when a password field loses focus
      aElement.addEventListener("blur",   (aEvent) => { this.onBlur(aEvent); }, false);
    });
  }

  /*
   * when a password field gains focus, make sure we show our UI
   */
  onFocus(aEvent) {
    this.warningElement.className = "";
    this.processInputEvent(aEvent);
  }

  /*
   * revert a password field to its original styles
   */
  hideWarningElement(aElement) {
    // hide the prose
    this.warningElement.className = "hidden";
  }

  /*
   * when a password field loses focus, revert to initial state
   */
  onBlur(aEvent) {
    if (this.inputTimeOut && this.currentInputElement == aEvent.target) {
      clearTimeout(this.inputTimeOut);
      this.inputTimeOut = null;
      this.currentInputElement = null;
    }

    const element = aEvent.target;
    this.hideWarningElement(element);
  }

  /*
   * a password field acquired focus or was added to the document
   */
  processInputEvent(aEvent) {
    const element = aEvent.target;

    // if there is no password, hide UI
    if (!element.value) {
      this.hideWarningElement(element);
      // early way out
      return;
    }

    if (this.inputTimeOut && this.currentInputElement) {
      clearTimeout(this.inputTimeOut);
      this.inputTimeOut = null;
      this.currentInputElement = null;
    }

    this.currentInputElement = element;

    this.inputTimeOut = setTimeout((aElement) => {
      // show the warning prose
      this.warningElement.className = "";

      // ask the background of the extension to evaluate the password
      chrome.runtime.sendMessage(
        {
          msg: "evaluatePassword",
          value: aElement.value
        },
        (aResponse) => {
          this.handleEvaluation(aElement, aResponse);
        }
      );
    }, 200, element);
  }

  /*
   * callback from background request, shows evaluation
   */
  handleEvaluation(aElement, aResponse) {
    // get the response color and message
    const color   = this.kRESPONSES[aResponse.score + 1][0];
    const message = this.kRESPONSES[aResponse.score + 1][1];

    // get the localized message
    this.warningElement.textContent = chrome.i18n.getMessage(message);

    // set the color
    this.warningElement.style.setProperty("background-color", color, "important");
    // position it correctly
    const elementRect = this.getInputFieldBoundingRect(aElement);
    this.warningElement.style.setProperty("top", (elementRect.top - 18) + "px");
    this.warningElement.style.setProperty("left", elementRect.left + "px");
    this.warningElement.style.setProperty("width", elementRect.width + "px");
  }

  getComputedStyle(aElement, aProperty) {
    return document.defaultView.getComputedStyle(aElement, "").getPropertyValue(aProperty);
  }

  getInputFieldBoundingRect(aElement) {
    let elt = aElement;
    let index = 0;

    while (elt) {
      const appearance = this.getComputedStyle(elt, "-webkit-appearance")
                         || this.getComputedStyle(elt, "-moz-appearance")
                         || this.getComputedStyle(elt, "appearance");

      if ((appearance && appearance != "none")
          || (this.getComputedStyle(elt, "border-width") != "0px"
              && this.getComputedStyle(elt, "border-color") != "transparent")) {
        break;
      }
      else {
        if (elt.parentNode && elt.parentNode.nodeType == Node.ELEMENT_NODE) {
          index++;
          if (index < 3) {
            elt = elt.parentNode;
            continue;
          }
        }

        elt = aElement;
        break;
      }
    }

    return elt.getBoundingClientRect();
  }
}

let sic = null;
window.addEventListener("load", function() {
  // silly ugly code to make sure we don't init twice
  if (!sic) {
    sic = new StrengthIndicatorContent();
  }
});
