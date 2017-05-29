'use strict'

const lang = require('./languages.json')

/**
 * Format Currency
 * @param {String}   language   'en-US'
 * @param {Number}   amount     99.99
 * @return {String}  '$99.99'
 */

function formatCurrency(language, amount) {
  let opts = {}

  opts.style = 'currency'
  opts.currency = lang[language]['currency']
  opts.minimumFractionDigits = lang[language]['minimumFractionDigits']

  let formatter = new Intl.NumberFormat(language, opts)

  return formatter.format(amount)
}

module.exports = formatCurrency
