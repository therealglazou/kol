/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: Password Strength Indicator
 * Original author: Daniel Glazman
 */

class StrengthIndicatorBackground {

  constructor() {
    // keep a reference to a Zxcvbn instance in the background so we don't have
    // to add zxcvbn-pv to each content page
    this.zxcvbn = new Zxcvbn();

    // add a listener to evaluation requests coming from content pages
    chrome.runtime.onMessage.addListener((request, sender, originalResponse) => {
      this.handleMessage(request, sender, originalResponse);
      // make it async returning a true boolean
      return true;
    });
  }

  /*
   * handle a request
   */
  async handleMessage(request, sender, sendResponse) {
    if (request.msg == "evaluatePassword") {
      // evaluate password...
      const response = await this.zxcvbn.evaluate(request.value, []);
      // ...and send back response
      sendResponse(response);
      // we're done here!
    }
  }
}

(new StrengthIndicatorBackground());
