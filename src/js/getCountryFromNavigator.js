/**
 * @description Gets country name by user navigator language
 * @param String || undefined countryTag if set then returns country name by this param
 * @returns Object response{
 * data: String
 * error: bool,
 * message: String
 * @author https://github.com/solvingIssues
 * @version 1.0
 * }
 */
function getCountryByNavigatorLanguage(countryTag) {
    let response = {
        data : "",
        error: false,
        message: ""
    }
    let currentTimeZone =
    navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    let currentTimeZoneLength = currentTimeZone.length;
    //Get last 2 chars of navigator language
    currentTimeZone= currentTimeZone.slice(currentTimeZoneLength - 2, currentTimeZone.length).toLowerCase();
    let countryTags = {
        "ab":"Abkhazian",
        "aa":"Afar",
        "af":"Afrikaans",
        "ak":"Akan",
        "sq":"Albanian",
        "am":"Amharic",
        "ar":"Arabic",
        "an":"Aragonese",
        "hy":"Armenian",
        "as":"Assamese",
        "av":"Avaric",
        "ae":"Avestan",
        "ay":"Aymara",
        "az":"Azerbaijani",
        "bm":"Bambara",
        "ba":"Bashkir",
        "eu":"Basque",
        "be":"Belarusian",
        "bn":"Bengali",
        "bn":"Bangla",
        "bh":"Bihari",
        "bi":"Bislama",
        "bs":"Bosnian",
        "br":"Breton",
        "bg":"Bulgarian",
        "my":"Burmese",
        "ca":"Catalan",
        "ch":"Chamorro",
        "ce":"Chechen",
        "ny":"Chichewa",
        "ny":"Chewa",
        "ny":"Nyanja",
        "zh":"Chinese",
        "ns":"zh-Ha",
        "nt":"zh-Ha",
        "cv":"Chuvash",
        "kw":"Cornish",
        "co":"Corsican",
        "cr":"Cree",
        "hr":"Croatian",
        "cs":"Czech",
        "da":"Danish",
        "dv":"Divehi",
        "dv":"Dhivehi",
        "dv":"Maldivian",
        "nl":"Dutch",
        "dz":"Dzongkha",
        "en":"English",
        "eo":"Esperanto",
        "et":"Estonian",
        "ee":"Ewe",
        "fo":"Faroese",
        "fj":"Fijian",
        "fi":"Finnish",
        "fr":"French",
        "ff":"Fula",
        "ff":"Fulah",
        "ff":"Pulaar",
        "ff":"Pular",
        "gl":"Galician",
        "gd":"Gaelic(Scottish)",
        "gv":"Gaelic(Manx)",
        "ka":"Georgian",
        "de":"German",
        "el":"Greek",
        "kl":"Greenlandic",
        "gn":"Guarani",
        "gu":"Gujarati",
        "ht":"HaitianCreole",
        "ha":"Hausa",
        "he":"Hebrew",
        "hz":"Herero",
        "hi":"Hindi",
        "ho":"HiriMotu",
        "hu":"Hungarian",
        "is":"Icelandic",
        "io":"Ido",
        "ig":"Igbo",
        "in":"Indonesianid",
        "ia":"Interlingua",
        "ie":"Interlingue",
        "iu":"Inuktitut",
        "ik":"Inupiak",
        "ga":"Irish",
        "it":"Italian",
        "ja":"Japanese",
        "jv":"Javanese",
        "kl":"Kalaallisut",
        "kl":"Greenlandic",
        "kn":"Kannada",
        "kr":"Kanuri",
        "ks":"Kashmiri",
        "kk":"Kazakh",
        "km":"Khmer",
        "ki":"Kikuyu",
        "rw":"Kinyarwanda(Rwanda)",
        "rn":"Kirundi",
        "ky":"Kyrgyz",
        "kv":"Komi",
        "kg":"Kongo",
        "ko":"Korean",
        "ku":"Kurdish",
        "kj":"Kwanyama",
        "lo":"Lao",
        "la":"Latin",
        "lv":"Latvian(Lettish)",
        "li":"Limburgish(Limburger)",
        "ln":"Lingala",
        "lt":"Lithuanian",
        "lu":"Luga-Katanga",
        "lg":"Luganda",
        "lg":"Ganda",
        "lb":"Luxembourgish",
        "gv":"Manx",
        "mk":"Macedonian",
        "mg":"Malagasy",
        "ms":"Malay",
        "ml":"Malayalam",
        "mt":"Maltese",
        "mi":"Maori",
        "mr":"Marathi",
        "mh":"Marshallese",
        "mo":"Moldavian",
        "mn":"Mongolian",
        "na":"Nauru",
        "nv":"Navajo",
        "ng":"Ndonga",
        "nd":"NorthernNdebele",
        "ne":"Nepali",
        "no":"Norwegian",
        "nb":"Norwegianbokmål",
        "nn":"Norwegiannynorsk",
        "ii":"Nuosu",
        "oc":"Occitan",
        "oj":"Ojibwe",
        "cu":"OldChurchSlavonic",
        "cu":"OldBulgarian",
        "or":"Oriya",
        "om":"Oromo(AfaanOromo)",
        "os":"Ossetian",
        "pi":"Pāli",
        "ps":"Pashto",
        "ps":"Pushto",
        "fa":"Persian(Farsi)",
        "pl":"Polish",
        "pt":"Portuguese",
        "pa":"Punjabi(Eastern)",
        "qu":"Quechua",
        "rm":"Romansh",
        "ro":"Romanian",
        "ru":"Russian",
        "se":"Sami",
        "sm":"Samoan",
        "sg":"Sango",
        "sa":"Sanskrit",
        "sr":"Serbian",
        "sh":"Serbo-Croatian",
        "st":"Sesotho",
        "tn":"Setswana",
        "sn":"Shona",
        "ii":"SichuanYi",
        "sd":"Sindhi",
        "si":"Sinhalese",
        "ss":"Siswati",
        "sk":"Slovak",
        "sl":"Slovenian",
        "so":"Somali",
        "nr":"SouthernNdebele",
        "es":"Spanish",
        "su":"Sundanese",
        "sw":"Swahili(Kiswahili)",
        "ss":"Swati",
        "sv":"Swedish",
        "tl":"Tagalog",
        "ty":"Tahitian",
        "tg":"Tajik",
        "ta":"Tamil",
        "tt":"Tatar",
        "te":"Telugu",
        "th":"Thai",
        "bo":"Tibetan",
        "ti":"Tigrinya",
        "to":"Tonga",
        "ts":"Tsonga",
        "tr":"Turkish",
        "tk":"Turkmen",
        "tw":"Twi",
        "ug":"Uyghur",
        "uk":"Ukrainian",
        "ur":"Urdu",
        "uz":"Uzbek",
        "ve":"Venda",
        "vi":"Vietnamese",
        "vo":"Volapük",
        "wa":"Wallon",
        "cy":"Welsh",
        "wo":"Wolof",
        "fy":"WesternFrisian",
        "xh":"Xhosa",
        "yo":"Yiddishyi",
        "yo":"ji",
        "yo":"Yoruba",
        "za":"Zhuang",
        "za":"Chuang",
        "zu":"Zulu"
    }
    if(typeof(countryTag) != "undefined") {
        countryTag = typeof(countryTag) == "string" ? countryTag.toLowerCase() : "";
        if(typeof(countryTags[countryTag]) == "undefined") {
            response.error = true;
            response.message = "An error ocurred getting country by navivagor language.";    
        } else {
            response.data = countryTags[countryTag];
        }

    } else if(typeof(countryTags[currentTimeZone]) == "undefined") {
        response.error = true;
        response.message = "An error ocurred getting country by navivagor language.";
    } else {
        response.data = countryTags[currentTimeZone];
    }
    return response;
}