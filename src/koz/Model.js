/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: kol
 * Original author: Daniel Glazman
 */

class Model {

  constructor(aCurrentLocale) {
    if (!aCurrentLocale) {
      throw Error('Model::constructor: empty locale');
    }

    this.currentLocale = aCurrentLocale;
    this.model = {};
  }

  registerLocale(aLocale) {
    if (!aLocale) {
      throw Error('Model::registerLocale: empty locale');
    }

    this.model[aLocale] = Object.create(aLocale);
  }

  loadLocale(aLocale){
    if (!aLocale) {
      throw Error('Model::loadLocale: empty locale');
    }

    let url =  chrome.extension.getURL("src/koz/model" + aLocale + ".json");

    let self = this;
    fetch(url, {mode:'same-origin'})
    .then(function(aRes) {
        return aRes.blob();
    })
    .then(function(aBlob) {
        var reader = new FileReader();
        reader.addEventListener("loadend", function() {
          if (aCallback && typeof aCallback == "function") {
            self.registerLocale(aLocale, JSON.parse(this.result));
          }
        });
        reader.readAsText(aBlob);
    })
    .catch((aError) => {
      console.log("Model::loadLocale: file load error: " + aError);
    })
  }

  setdefaultLocale(aLocale) {
    if (!aLocale) {
      throw Error('Model::setdefaultLocale: empty locale');
    }

    this.defaultLocale = aLocale;
  }

  reverseModel(aLocale, aRv) {
    if (!aLocale) {
      throw Error('Model::reverseModel: empty locale');
    }

    if (typeof aRv != "object") {
      throw Error('Model::reverseModel: return value is not an object');
    }

    if (!(aLocale in this.model)) {
      console.log('Model::reverseModel: locale not found: ' + aLocale);
      return;
    }

    let rv = {};
    for (let type in this.model[aLocale]) {
      for (let keyword in this.model[aLocale][type]) {
        if (!rv[keyword]) {
          rv[keyword] = {};
        }

        rv[keyword][type] = this.model[aLocale][type][keyword];
      }
    }
  }

  buildModelForLocale(aLocale) {
    if (!aLocale) {
      throw Error('Model::buildModelForLocale: empty locale');
    }

    let rv = {};
    const defaultLocale = this.defaultLocale || "en";
    this.reverseModel(defaultLocale, rv);
    if (this.currentLocale && this.currentLocale != defaultLocale) {
      this.reverseModel(this.currentLocale, rv);
    }

    return rv;
  }
}
