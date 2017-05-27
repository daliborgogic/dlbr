'use strict'

const test = require('tape')
const lang = require('../languages.json')
const format = require('../index.js')

test('Serbian Dinar', assert => {
  const expected = 'RSD 51'
  const actual = format('sr-RS', 50.55)
  console.log(actual)

  assert.equal(actual, expected, 'Wohoo!')

  assert.end()
})
