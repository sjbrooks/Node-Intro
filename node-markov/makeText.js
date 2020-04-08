/** Command-line tool to generate Markov text. */

let MarkovMachine = require('./markov.js');

const fs = require("fs");
const axios = require("axios");
const type = process.argv[2];
let input = process.argv[3];

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(`Error reading ${path}`, err);
      process.exit(1);
    }
    let mm = new MarkovMachine(data);
    let sentence = mm.makeText();
    console.log(sentence)
    process.exit(0);
  });
}

async function webCat(url) {
  axios.get(url).then(function (resp) {
    let mm = new MarkovMachine(resp.data);
    let sentence = mm.makeText();
    console.log(sentence);
    process.exit(0);
  });
}

if (type === "url") {
  webCat(input);
} else {
  cat(input);
}
