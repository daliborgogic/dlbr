'use strict'

const lang = require('./languages.json')

/**
 * Format Currency
 * @param {String}   language   'en-US'
 * @param {Number}   amount     99.99
 * @return {String}
 */

function formatCurrency(language, amount) {
  let opts = {}

  opts.style = 'currency'
  opts.currency = lang[language]['currency']

  opts.minimumFractionDigits = lang[language]['minimumFractionDigits']
  if (typeof window != 'undefined' && window.document) {
    let formatter = new Intl.NumberFormat(language,opts)
    return formatter.format(amount)
  } else {
    const IntlPolyfill = require('intl')
    let formatter = new IntlPolyfill.NumberFormat(language,opts)
    return formatter.format(amount)
  }
}

module.exports = formatCurrency

// console.log(formatCurrency('sr-RS', 99.99))
// console.log(formatCurrency('en-GB', 99.99))
// console.log(formatCurrency('ja-JP', 99.99))
