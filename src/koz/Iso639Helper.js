/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original code: kol
 * Original author: Daniel Glazman
 */

class Iso639Helper {

  constructor() {
    this.codes = {
      // ISO 639-3 to ISO 639-
      // Source: https://iso639-3.sil.org/code_tables/639/data
      "aar": "aa", // Afar
      "abk": "ab", // Abkhaz
      "afr": "af", // Afrikaans
      "aka": "ak", // Akan
      "sqi": "sq", // Albanian
      "amh": "am", // Amharic
      "ara": "ar", // Arabic
      "arg": "an", // Aragonese
      "hye": "hy", // Armenian
      "asm": "as", // Assamese
      "ava": "av", // Avaric
      "ave": "ae", // Avestan
      "aym": "ay", // Aymara
      "aze": "az", // Azerbaijani
      "bak": "ba", // Bashkir
      "bam": "bm", // Bambara
      "eus": "eu", // Basque
      "bel": "be", // Belarusian
      "ben": "bn", // Bengali
      "bih": "bh", // Bihari (languages)
      "bis": "bi", // Bislama
      "bos": "bs", // Bosnian
      "bre": "br", // Breton
      "bul": "bg", // Bulgarian
      "mya": "my", // Burmese
      "cat": "ca", // Catalan
      "cha": "ch", // Chamorro
      "che": "ce", // Chechen
      "zho": "zh", // Chinese
      "chu": "cu", // Church Slavic, Old Slavonic, Church Slavonic, Old Bulgarian, Old Church Slavonic
      "chv": "cv", // Chuvash
      "cor": "kw", // Cornish
      "cos": "co", // Corsican
      "cre": "cr", // Cree
      "ces": "cs", // Czech
      "dan": "da", // Danish
      "div": "dv", // Divehi, Dhivehi, Maldivian
      "nld": "nl", // Dutch, Flemish
      "dzo": "dz", // Dzongkha
      "eng": "en", // English
      "epo": "eo", // Esperanto
      "est": "et", // Estonian
      "ewe": "ee", // Ewe
      "fao": "fo", // Faroese
      "fij": "fj", // Fijian
      "fin": "fi", // Finnish
      "fra": "fr", // French
      "fry": "fy", // Western Frisian
      "ful": "ff", // Fulah
      "kat": "ka", // Georgian
      "deu": "de", // German
      "gla": "gd", // Scottish Gaelic, Gaelic
      "gle": "ga", // Irish
      "glg": "gl", // Galician
      "glv": "gv", // Manx
      "ell": "el", // Modern Greek (since 1453–)
      "grn": "gn", // Guarani
      "guj": "gu", // Gujarati
      "hat": "ht", // Haitian Creole, Haitian
      "hau": "ha", // Hausa
      "hbs": "sh", // Serbocroatian
      "heb": "he", // Hebrew
      "her": "hz", // Herero
      "hin": "hi", // Hindi
      "hmo": "ho", // Hiri Motu
      "hrv": "hr", // Croatian
      "hun": "hu", // Hungarian
      "ibo": "ig", // Igbo
      "isl": "is", // Icelandic
      "ido": "io", // Ido
      "iii": "ii", // Sichuan Yi, Nuosu
      "iku": "iu", // Inuktitut
      "ile": "ie", // Interlingue, Occidental
      "ina": "ia", // Interlingua (International Auxiliary Language Association)
      "ind": "id", // Indonesian
      "ipk": "ik", // Inupiaq
      "ita": "it", // Italian
      "jav": "jv", // Javanese
      "jpn": "ja", // Japanese
      "kal": "kl", // Greenlandic, Kalaallisut
      "kan": "kn", // Kannada
      "kas": "ks", // Kashmiri
      "kau": "kr", // Kanuri
      "kaz": "kk", // Kazakh
      "khm": "km", // Central Khmer
      "kik": "ki", // Kikuyu, Gikuyu
      "kin": "rw", // Kinyarwanda
      "kir": "ky", // Kirghiz
      "kom": "kv", // Komi
      "kon": "kg", // Kongo
      "kor": "ko", // Korean
      "kua": "kj", // Kuanyama, Kwanyama
      "kur": "ku", // Kurdish
      "lao": "lo", // Lao
      "lat": "la", // Latin
      "lav": "lv", // Latvian
      "lim": "li", // Limburgish, Limburger, Limburgan
      "lin": "ln", // Lingala
      "lit": "lt", // Lithuanian
      "ltz": "lb", // Luxembourgish, Letzeburgesch
      "lub": "lu", // Luba-Katanga
      "lug": "lg", // Ganda
      "mkd": "mk", // Macedonian
      "mah": "mh", // Marshallese
      "mal": "ml", // Malayalam
      "mri": "mi", // Māori
      "mar": "mr", // Marathi
      "msa": "ms", // Malay
      "mlg": "mg", // Malagasy
      "mlt": "mt", // Maltese
      "mol": "mo", // Moldavian
      "mon": "mn", // Mongolian
      "nau": "na", // Nauruan
      "nav": "nv", // Navajo, Navaho
      "nbl": "nr", // South Ndebele
      "nde": "nd", // North Ndebele
      "ndo": "ng", // Ndonga
      "nep": "ne", // Nepali
      "nno": "nn", // Norwegian Nynorsk
      "nob": "nb", // Norwegian Bokmål
      "nor": "no", // Norwegian
      "nya": "ny", // Chichewa, Chewa, Nyanja
      "oci": "oc", // Occitan (XX), Provençal
      "oji": "oj", // Ojibwa
      "ori": "or", // Oriya
      "orm": "om", // Oromo
      "oss": "os", // Ossetian, Ossetic
      "pan": "pa", // Punjabi, Panjabi
      "fas": "fa", // Persian
      "pli": "pi", // Pali
      "pol": "pl", // Polish
      "por": "pt", // Portuguese
      "pus": "ps", // Pushto, Pashto
      "que": "qu", // Quechua
      "roh": "rm", // Romansh
      "ron": "ro", // Romanian, Moldavian, Moldovan
      "run": "rn", // Rundi
      "rus": "ru", // Russian
      "sag": "sg", // Sango
      "san": "sa", // Sanskrit
      "srp": "sr", // Serbian
      "sin": "si", // Sinhalese, Sinhala
      "slk": "sk", // Slovak
      "slv": "sl", // Slovenian
      "sme": "se", // Northern Sami
      "smo": "sm", // Samoan
      "sna": "sn", // Shona
      "snd": "sd", // Sindhi
      "som": "so", // Somali
      "sot": "st", // Southern Sotho
      "spa": "es", // Spanish, Castilian
      "srd": "sc", // Sardinian
      "ssw": "ss", // Swati
      "sun": "su", // Sundanese
      "swa": "sw", // Swahili
      "swe": "sv", // Swedish
      "tah": "ty", // Tahitian
      "tam": "ta", // Tamil
      "tat": "tt", // Tatar
      "tel": "te", // Telugu
      "tgk": "tg", // Tajik
      "tgl": "tl", // Tagalog
      "tha": "th", // Thai
      "bod": "bo", // Tibetan
      "tir": "ti", // Tigrinya
      "ton": "to", // Tongan (Tonga Islands)
      "tsn": "tn", // Tswana
      "tso": "ts", // Tsonga
      "tuk": "tk", // Turkmen
      "tur": "tr", // Turkish
      "twi": "tw", // Twi
      "uig": "ug", // Uighur, Uyghur
      "ukr": "uk", // Ukrainian
      "urd": "ur", // Urdu
      "uzb": "uz", // Uzbek
      "ven": "ve", // Venda
      "vie": "vi", // Vietnamese
      "vol": "vo", // Volapük
      "cym": "cy", // Welsh
      "wln": "wa", // Walloon
      "wol": "wo", // Wolof
      "xho": "xh", // Xhosa
      "yid": "yi", // Yiddish
      "yor": "yo", // Yoruba
      "zha": "za", // Zhuang, Chuang
      "zul": "zu", // Zulu
    };
  }

  toIso639Dash2(aIso639Dash3Code) {
    return this.codes[aIso639Dash3Code];
  }
}
