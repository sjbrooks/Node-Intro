let MarkovMachine = require('./markov.js');

describe("makeChains method", function () {
  let expected = new Map(Object.entries({'the': [ 'cat', 'hat' ], 'cat': [ 'in' ], 'in': [ 'the' ],'hat': [ null ]}))
  
  test("returns expected map from passing in a simple sentence", function () {
    let simple = new MarkovMachine('the cat in the hat');
    expect(simple.chains).toEqual(expected)
  })
})

describe("makeText method", function () {
  test("returns a sentence that ends with our last word (before null)", function () {
    let simple = new MarkovMachine('the cat in the hat');
    let sentence = simple.makeText();
    let endsWithLastWord = sentence.endsWith("hat");
    expect(endsWithLastWord).toEqual(true);
  })
})