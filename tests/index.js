'use strict'
const test = require('tape')
const lang = require('../languages.json')
const formatCurrency = require('../index.js')

test('Serbian Dinar', assert => {
  const expected = 'RSD 99.99'
  const actual = formatCurrency('sr-RS', 99.99)
  console.log(formatCurrency('sr-RS', 99.99))

  assert.equal(actual, expected, 'Wohoo!')

  assert.end()
})
