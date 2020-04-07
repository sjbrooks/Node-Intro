/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let words = this.words;
    this.chains = new Map()
    for (let i = 0; i < words.length; i++) {
      let val = this.chains.get(words[i])
      if (val === undefined) val = [];
      if (words[i+1]) {
        val.push(words[i+1]);
        this.chains.set(words[i], val);
      } else {
        val.push(null)
        this.chains.set(words[i], val);
        break;
      }
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

const fs = require('fs');

/** read file at path and print it out. */

// let path = process.argv[2];
function cat(path) {
  text = fs.readFileSync(path, 'utf8');
  return text;
}

module.exports = MarkovMachine;