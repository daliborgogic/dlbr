'use strict'

const lang = require('./languages.json')

var Intl = require('intl')


/**
 * Format Currency
 * @param {String}   language   'en-US'
 * @param {Number}   amount     99.99
 * @return {String}
 */
 // let a = () => {
 //  return new INumber(123456.789).toLocaleString('de-DE'); // 123.456,789
 // console.log('A ', a)
 // }

function formatCurrency(language, amount) {
  let opts = {}

  opts.style = 'currency'
  opts.currency = lang[language]['currency']
  opts.minimumFractionDigits = lang[language]['minimumFractionDigits']

  let formatter = new Intl.NumberFormat(language,opts)

  return formatter.format(amount)
}

module.exports = formatCurrency
