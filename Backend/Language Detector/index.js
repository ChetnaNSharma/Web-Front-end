const franc = require("franc");
const langs = require("langs");

const input = process.argv[2];
const langCode = franc(input);
const lang = langs.where("3", langCode);
console.log(`This language is called ${lang.name}.`);
