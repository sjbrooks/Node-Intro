let MarkovMachine = require('./markov.js');

describe("makeChains method", function () {
  let expected = new Map(Object.entries({'the': [ 'cat', 'hat' ], 'cat': [ 'in' ], 'in': [ 'the' ],'hat': [ null ]}))
  
  test("returns expected map from passing in a simple sentence", function () {
    let simple = new MarkovMachine('the cat in the hat');
    expect(simple.chains).toEqual(expected)
  })
})