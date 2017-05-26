'use strict'

const test = require('tape')
const format = require('../index.js')

test('Serbian Dinar', assert => {
  const expected = 'RSD51'
  const actual = format('RSD', 50.55)

  assert.equal(actual, expected, 'Wohoo!')

  assert.end()
})
