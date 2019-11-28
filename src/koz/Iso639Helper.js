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
      "aar": "aa", // Afar
      "abk": "ab", // Abkhaz
      "ace": "",   // Acehnese, Achinese
      "ach": "",   // Acoli
      "ada": "",   // Adangme
      "ady": "",   // Adyghe, Adygei
      "afa": "",   // Afro-Asiatic languages
      "afh": "",   // Afrihili
      "afr": "af", // Afrikaans
      "ain": "",   // Ainu
      "aka": "ak", // Akan
      "akk": "",   // Akkadian
      "sqi": "sq", // Albanian
      "ale": "",   // Aleut
      "alg": "",   // Algonquian languages
      "alt": "",   // Southern Altai
      "amh": "am", // Amharic
      "ang": "",   // English, Old (ca. 450–1100)
      "anp": "",   // Angika
      "apa": "",   // Apache languages
      "ara": "ar", // Arabic
      "arc": "",   // Official Aramaic, Imperial Aramaic (700-300 BCE)
      "arg": "an", // Aragonese
      "hye": "hy", // Armenian
      "arn": "",   // Mapudungun, Mapuche
      "arp": "",   // Arapaho
      "art": "",   // Artificial languages
      "arw": "",   // Arawak
      "asm": "as", // Assamese
      "ast": "",   // Asturian, Bable, Leonese, Asturleonese
      "ath": "",   // Athapascan languages
      "aus": "",   // Australian languages
      "ava": "av", // Avaric
      "ave": "ae", // Avestan
      "awa": "",   // Awadhi
      "aym": "ay", // Aymara
      "aze": "az", // Azerbaijani
      "bad": "",   // Banda languages
      "bai": "",   // Bamileke languages
      "bak": "ba", // Bashkir
      "bal": "",   // Baluchi
      "bam": "bm", // Bambara
      "ban": "",   // Balinese
      "eus": "eu", // Basque
      "bas": "",   // Basa
      "bat": "",   // Baltic languages
      "bej": "",   // Beja, Bedawiyet
      "bel": "be", // Belarusian
      "bem": "",   // Bemba
      "ben": "bn", // Bengali
      "ber": "",   // Berber languages
      "bho": "",   // Bhojpuri
      "bih": "bh", // Bihari (languages)
      "bik": "",   // Bikol
      "bin": "",   // Bini, Edo
      "bis": "bi", // Bislama
      "bla": "",   // Siksika
      "bnt": "",   // Bantu languages
      "bos": "bs", // Bosnian
      "bra": "",   // Braj Basha
      "bre": "br", // Breton
      "btk": "",   // Batak languages
      "bua": "",   // Buriat
      "bug": "",   // Buginese
      "bul": "bg", // Bulgarian
      "mya": "my", // Burmese
      "byn": "",   // Blin, Bilin
      "cad": "",   // Caddo
      "cai": "",   // Central American Indian languages
      "car": "",   // Galibi Carib
      "cat": "ca", // Catalan
      "cau": "",   // Caucasian languages
      "ceb": "",   // Cebuano
      "cel": "",   // Celtic languages
      "cha": "ch", // Chamorro
      "chb": "",   // Chibcha
      "che": "ce", // Chechen
      "chg": "",   // Chagatai
      "zho": "zh", // Chinese
      "chk": "",   // Chuukese
      "chm": "",   // Mari
      "chn": "",   // Chinook jargon
      "cho": "",   // Choctaw
      "chp": "",   // Chipewyan, Dene Suline
      "chr": "",   // Cherokee
      "chu": "cu", // Church Slavic, Old Slavonic, Church Slavonic, Old Bulgarian, Old Church Slavonic
      "chv": "cv", // Chuvash
      "chy": "",   // Cheyenne
      "cmc": "",   // Chamic languages
      "cnr": "",   // Montenegrin
      "cop": "",   // Coptic
      "cor": "kw", // Cornish
      "cos": "co", // Corsican
      "cpe": "",   // creoles and pidgins, English-based
      "cpf": "",   // creoles and pidgins, French-based
      "cpp": "",   // creoles and pidgins, Portuguese-based
      "cre": "cr", // Cree
      "crh": "",   // Crimean Tatar, Crimean Turkish
      "crp": "",   // creoles and pidgins
      "csb": "",   // Kashubian
      "cus": "",   // Cushitic languages
      "ces": "cs", // Czech
      "dak": "",   // Dakota
      "dan": "da", // Danish
      "dar": "",   // Dargwa
      "day": "",   // Land Dayak languages
      "del": "",   // Delaware
      "den": "",   // Slavey
      "dgr": "",   // Dogrib
      "din": "",   // Dinka
      "div": "dv", // Divehi, Dhivehi, Maldivian
      "doi": "",   // Dogri
      "dra": "",   // Dravidian languages
      "dsb": "",   // Lower Sorbian
      "dua": "",   // Duala
      "dum": "",   // Dutch, Middle (ca. 1050–1350)
      "nld": "nl", // Dutch, Flemish
      "dyu": "",   // Dyula
      "dzo": "dz", // Dzongkha
      "efi": "",   // Efik
      "egy": "",   // Egyptian (Ancient)
      "eka": "",   // Ekajuk
      "elx": "",   // Elamite
      "eng": "en", // English
      "enm": "",   //
      "epo": "eo", // Esperanto
      "est": "et", // Estonian
      "ewe": "ee", // Ewe
      "ewo": "",   // Ewondo
      "fan": "",   // Fang
      "fao": "fo", // Faroese
      "fat": "",   // Fanti
      "fij": "fj", // Fijian
      "fil": "",   // Filipino
      "fin": "fi", // Finnish
      "fiu": "",   // Finno-Ugrian languages
      "fon": "",   // Fon
      "fra": "fr", // French
      "frm": "",   // Middle French (ca. 1400—1600)
      "fro": "",   // Old French (842—ca. 1400)
      "frr": "",   // Northern Frisian
      "frs": "",   // Eastern Frisian
      "fry": "fy", // Western Frisian
      "ful": "ff", // Fulah
      "fur": "",   // Friulian
      "gaa": "",   // Ga
      "gay": "",   // Gayo
      "gba": "",   // Gbaya
      "gem": "",   // Germanic languages
      "kat": "ka", // Georgian
      "deu": "de", // German
      "gez": "",   // Ge'ez
      "gil": "",   // Gilbertese
      "gla": "gd", // Scottish Gaelic, Gaelic
      "gle": "ga", // Irish
      "glg": "gl", // Galician
      "glv": "gv", // Manx
      "gmh": "",   // Middle High German (ca. 1050–1500)
      "goh": "",   // Old High German (ca. 750–1050)
      "gon": "",   // Gondi
      "gor": "",   // Gorontalo
      "got": "",   // Gothic
      "grb": "",   // Grebo
      "grc": "",   // Ancient Greek (to 1453)
      "ell": "el", // Modern Greek (since 1453–)
      "grn": "gn", // Guarani
      "gsw": "",   // Swiss German, Alemannic, Alsatian
      "guj": "gu", // Gujarati
      "gwi": "",   // Gwichʼin
      "hai": "",   // Haida
      "hat": "ht", // Haitian Creole, Haitian
      "hau": "ha", // Hausa
      "haw": "",   // Hawaiian
      "hbs": "sh[3]", // Serbocroatian
      "heb": "he", // Hebrew
      "her": "hz", // Herero
      "hil": "",   // Hiligaynon
      "him": "",   // Himachali
      "hin": "hi", // Hindi
      "hit": "",   // Hittite
      "hmn": "",   // Hmong
      "hmo": "ho", // Hiri Motu
      "hrv": "hr", // Croatian
      "hsb": "",   // Upper Sorbian
      "hun": "hu", // Hungarian
      "hup": "",   // Hupa
      "iba": "",   // Iban
      "ibo": "ig", // Igbo
      "isl": "is", // Icelandic
      "ido": "io", // Ido
      "iii": "ii", // Sichuan Yi, Nuosu
      "ijo": "",   // Ijo languages
      "iku": "iu", // Inuktitut
      "ile": "ie", // Interlingue, Occidental
      "ilo": "",   // Iloko
      "ina": "ia", // Interlingua (International Auxiliary Language Association)
      "inc": "",   // Indic languages
      "ind": "id", // Indonesian
      "ine": "",   // Indo-European languages
      "inh": "",   // Ingush
      "ipk": "ik", // Inupiaq
      "ira": "",   // Iranian languages
      "iro": "",   // Iroquoian languages
      "ita": "it", // Italian
      "jav": "jv", // Javanese
      "jbo": "",   // Lojban
      "jpn": "ja", // Japanese
      "jpr": "",   // Judeo-Persian
      "jrb": "",   // Judeo-Arabic
      "kaa": "",   // Kara-Kalpak
      "kab": "",   // Kabyle
      "kac": "",   // Kachin, Jingpho
      "kal": "kl", // Greenlandic, Kalaallisut
      "kam": "",   // Kamba
      "kan": "kn", // Kannada
      "kar": "",   // Karen languages
      "kas": "ks", // Kashmiri
      "kau": "kr", // Kanuri
      "kaw": "",   // Kawi
      "kaz": "kk", // Kazakh
      "kbd": "",   // Kabardian
      "kha": "",   // Khasi
      "khi": "",   // Khoisan languages
      "khm": "km", // Central Khmer
      "kho": "",   // Khotanese, Sakan
      "kik": "ki", // Kikuyu, Gikuyu
      "kmb": "",   // Kimbundu
      "kin": "rw", // Kinyarwanda
      "kir": "ky", // Kirghiz
      "kok": "",   // Konkani
      "kom": "kv", // Komi
      "kon": "kg", // Kongo
      "kor": "ko", // Korean
      "kos": "",   // Kosraean
      "kpe": "",   // Kpelle
      "krc": "",   // Karachay-Balkar
      "krl": "",   // Karelian
      "kro": "",   // Kru languages
      "kru": "",   // Kurukh
      "kua": "kj", // Kuanyama, Kwanyama
      "kum": "",   // Kumyk
      "kur": "ku", // Kurdish
      "kut": "",   // Kutenai
      "lad": "",   // Ladino
      "lah": "",   // Lahnda
      "lam": "",   // Lamba
      "lao": "lo", // Lao
      "lat": "la", // Latin
      "lav": "lv", // Latvian
      "lez": "",   // Lezghian
      "lim": "li", // Limburgish, Limburger, Limburgan
      "lin": "ln", // Lingala
      "lit": "lt", // Lithuanian
      "lol": "",   // Mongo
      "loz": "",   // Lozi
      "ltz": "lb", // Luxembourgish, Letzeburgesch
      "lua": "",   // Luba-Lulua
      "lub": "lu", // Luba-Katanga
      "lug": "lg", // Ganda
      "lui": "",   // Luiseño
      "lun": "",   // Lunda
      "luo": "",   // Luo
      "lus": "",   // Lushai
      "mkd": "mk", // Macedonian
      "mad": "",   // Madurese
      "mag": "",   // Magahi
      "mah": "mh", // Marshallese
      "mai": "",   // Maithili
      "mak": "",   // Makasar
      "mal": "ml", // Malayalam
      "man": "",   // Mandingo
      "mri": "mi", // Māori
      "map": "",   // Austronesian languages
      "mar": "mr", // Marathi
      "mas": "",   // Masai
      "msa": "ms", // Malay
      "mdf": "",   // Moksha
      "mdr": "",   // Mandar
      "men": "",   // Mende
      "mga": "",   // Middle Irish (900–1200)
      "mic": "",   // Mi'kmaq, Micmac
      "min": "",   // Minangkabau
      "mis": "",   // uncoded languages
      "mkh": "",   // Mon-Khmer languages
      "mlg": "mg", // Malagasy
      "mlt": "mt", // Maltese
      "mnc": "",   // Manchu
      "mni": "",   // Manipuri
      "mno": "",   // Manobo languages
      "moh": "",   // Mohawk
      "mol": "mo", // Moldavian
      "mon": "mn", // Mongolian
      "mos": "",   // Mossi
      "mul": "",   // multiple languages
      "mun": "",   // Munda languages
      "mus": "",   // Creek
      "mwl": "",   // Mirandese
      "mwr": "",   // Marwari
      "myn": "",   // Mayan languages
      "myv": "",   // Erzya
      "nah": "",   // Nahuatl languages
      "nai": "",   // North American Indian languages
      "nap": "",   // Neapolitan
      "nau": "na", // Nauruan
      "nav": "nv", // Navajo, Navaho
      "nbl": "nr", // South Ndebele
      "nde": "nd", // North Ndebele
      "ndo": "ng", // Ndonga
      "nds": "",   // Low German, Low Saxon
      "nep": "ne", // Nepali
      "new": "",   // Nepal Bhasa, Newari
      "nia": "",   // Nias
      "nic": "",   // Niger-Kordofanian languages
      "niu": "",   // Niuean
      "nno": "nn", // Norwegian Nynorsk
      "nob": "nb", // Norwegian Bokmål
      "nog": "",   // Nogai
      "non": "",   // Norse, Old
      "nor": "no", // Norwegian
      "nqo": "",   // N'Ko
      "nso": "",   // Northern Sotho, Pedi, Sepedi
      "nub": "",   // Nubian languages
      "nwc": "",   // Classical Newari, Old Newari, Classical Nepal Bhasa
      "nya": "ny", // Chichewa, Chewa, Nyanja
      "nym": "",   // Nyamwezi
      "nyn": "",   // Nyankole
      "nyo": "",   // Nyoro
      "nzi": "",   // Nzima
      "oci": "oc", // Occitan (XX), Provençal
      "oji": "oj", // Ojibwa
      "ori": "or", // Oriya
      "orm": "om", // Oromo
      "osa": "",   // Osage
      "oss": "os", // Ossetian, Ossetic
      "ota": "",   // Ottoman Turkish (1500–1928)
      "oto": "",   // Otomian languages
      "paa": "",   // Papuan languages
      "pag": "",   // Pangasinan
      "pal": "",   // Pahlavi (Middle Persian)
      "pam": "",   // Pampanga, Kapampangan
      "pan": "pa", // Punjabi, Panjabi
      "pap": "",   // Papiamento
      "pau": "",   // Palauan
      "peo": "",   // Old Persian (ca. 600–400 BC)
      "fas": "fa", // Persian
      "phi": "",   // Philippine languages
      "phn": "",   // Phoenician
      "pli": "pi", // Pali
      "pol": "pl", // Polish
      "pon": "",   // Pohnpeian
      "por": "pt", // Portuguese
      "pra": "",   // Prakrit languages
      "pro": "",   // Old Provençal, Old Occitan (to 1500)
      "pus": "ps", // Pushto, Pashto
      "que": "qu", // Quechua
      "raj": "",   // Rajasthani
      "rap": "",   // Rapanui
      "rar": "",   // Rarotongan, Cook Islands Maori
      "rcf": "",   // Reunionese, Reunion Creole
      "roa": "",   // Romance languages
      "roh": "rm", // Romansh
      "rom": "",   // Romany
      "ron": "ro", // Romanian, Moldavian, Moldovan
      "run": "rn", // Rundi
      "rup": "",   // Aromanian, Arumanian, Macedo-Romanian
      "rus": "ru", // Russian
      "sad": "",   // Sandawe
      "sag": "sg", // Sango
      "sah": "",   // Yakut
      "sai": "",   // South American Indian languages
      "sal": "",   // Salishan languages
      "sam": "",   // Samaritan Aramaic
      "san": "sa", // Sanskrit
      "sas": "",   // Sasak
      "sat": "",   // Santali
      "srp": "sr", // Serbian
      "scn": "",   // Sicilian
      "sco": "",   // Scots
      "sel": "",   // Selkup
      "sem": "",   // Semitic languages
      "sga": "",   // Old Irish (to 900)
      "sgn": "",   // Sign languages
      "shn": "",   // Shan
      "shp": "",   // Shipibo language
      "sid": "",   // Sidamo
      "sin": "si", // Sinhalese, Sinhala
      "sio": "",   // Siouan languages
      "sit": "",   // Sino-Tibetan languages
      "sla": "",   // Slavic languages
      "slk": "sk", // Slovak
      "slv": "sl", // Slovenian
      "sma": "",   // Southern Sami
      "sme": "se", // Northern Sami
      "smi": "",   // Sami languages
      "smj": "",   // Lule Sami
      "smn": "",   // Inari Sami
      "smo": "sm", // Samoan
      "sms": "",   // Skolt Sami
      "sna": "sn", // Shona
      "snd": "sd", // Sindhi
      "snk": "",   // Soninke
      "sog": "",   // Sogdian
      "som": "so", // Somali
      "son": "",   // Songhai languages
      "sot": "st", // Southern Sotho
      "spa": "es", // Spanish, Castilian
      "srd": "sc", // Sardinian
      "srn": "",   // Sranan Tongo
      "srr": "",   // Serer
      "ssa": "",   // Nilo-Saharan languages
      "ssw": "ss", // Swati
      "suk": "",   // Sukuma
      "sun": "su", // Sundanese
      "sus": "",   // Susu
      "sux": "",   // Sumerian
      "swa": "sw", // Swahili
      "swe": "sv", // Swedish
      "syc": "",   // Classical Syriac
      "syr": "",   // Syriac
      "tah": "ty", // Tahitian
      "tai": "",   // Tai languages
      "tam": "ta", // Tamil
      "tat": "tt", // Tatar
      "tel": "te", // Telugu
      "tem": "",   // Timne
      "ter": "",   // Tereno
      "tet": "",   // Tetum
      "tgk": "tg", // Tajik
      "tgl": "tl", // Tagalog
      "tha": "th", // Thai
      "bod": "bo", // Tibetan
      "tig": "",   // Tigre
      "tir": "ti", // Tigrinya
      "tiv": "",   // Tiv
      "tkl": "",   // Tokelau
      "tlh": "",   // Klingon
      "tli": "",   // Tlingit
      "tmh": "",   // Tamashek
      "tog": "",   // Tonga (Nyasa)
      "ton": "to", // Tongan (Tonga Islands)
      "tpi": "",   // Tok Pisin
      "tsi": "",   // Tsimshian
      "tsn": "tn", // Tswana
      "tso": "ts", // Tsonga
      "tuk": "tk", // Turkmen
      "tum": "",   // Tumbuka
      "tup": "",   // Tupi languages
      "tur": "tr", // Turkish
      "tut": "",   // Altaic languages
      "tvl": "",   // Tuvalu
      "twi": "tw", // Twi
      "tyv": "",   // Tuvinian
      "udm": "",   // Udmurt
      "uga": "",   // Ugaritic
      "uig": "ug", // Uighur, Uyghur
      "ukr": "uk", // Ukrainian
      "umb": "",   // Umbundu
      "und": "",   // Undetermined language
      "urd": "ur", // Urdu
      "uzb": "uz", // Uzbek
      "vai": "",   // Vai
      "ven": "ve", // Venda
      "vie": "vi", // Vietnamese
      "vol": "vo", // Volapük
      "vot": "",   // Votic
      "wak": "",   // Wakashan languages
      "wal": "",   // Wolaitta, Wolaytta
      "war": "",   // Waray
      "was": "",   // Washo
      "cym": "cy", // Welsh
      "wen": "",   // Sorbian languages
      "wln": "wa", // Walloon
      "wol": "wo", // Wolof
      "xal": "",   // Kalmyk, Oirat
      "xho": "xh", // Xhosa
      "yao": "",   // Yao
      "yap": "",   // Yapese
      "yid": "yi", // Yiddish
      "yor": "yo", // Yoruba
      "zap": "",   // Zapotec
      "zbl": "",   // Blissymbols, Blissymbolics, Bliss
      "zen": "",   // Zenaga
      "zgh": "",   // Moroccan Amazigh
      "zha": "za", // Zhuang, Chuang
      "znd": "",   // Zande languages
      "zul": "zu", // Zulu
      "zun": "",   // Zuni
      "zxx": "",   // no linguistic content, not applicable
      "zza": "",   // Zaza, Dimili, Dimli, Kirdki, Kirmanjki, Zazaki
    };
  }
}
