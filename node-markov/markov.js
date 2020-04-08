// How do they handle puncuation?

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
    console.log("This is this.chains inside of makeText", this.chains);
    this.text = "";
    let chains = this.chains;
    console.log("this is chains.keys", Array.from(chains.keys()));
    let keys = Array.from(chains.keys());
    let randIdx = Math.floor(Math.random()*(chains.size));
    let firstWord = keys[randIdx];
    this.text += (firstWord);
    let word = firstWord;
    console.log("This is word", word)
    
    for (let i = 0; i < numWords; i++) {
      let words = chains.get(word);
      console.log("This is the words array", words);
      let randWordIdx = Math.floor(Math.random()*(words.length))
      word = words[randWordIdx];
      console.log("This is word inside for loop", word)
      if (word) {
        this.text += (" " + word);
      } else {
        return this.text;
      }
    }
    return this.text;
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

const machine = new MarkovMachine("the cat in the hat");
let text = machine.makeText();
console.log("Your random sentence is", text);