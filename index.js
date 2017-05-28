'use strict'

const lang = require('./languages.json')

/**
 * Format Currency
 * @param {String}   language   'en-US'
 * @param {Number}   amount     99.99
 * @return {String}
 */

function formatCurrency(language, amount) {
<<<<<<< HEAD
	return new Intl.NumberFormat(language, {
		style: 'currency',
<<<<<<< HEAD
		currency: lang[language]['currency'],
    	minimumFractionDigits: lang[language]['minimumFractionDigits']
=======
		currency: 'RSD',//lang[language]['currency'],
    minimumFractionDigits: 2 //lang[language]['minimumFractionDigits']
>>>>>>> 2e3f38372148565d9201acc51090ae15f22a6df6
	}).format(amount)
=======
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
>>>>>>> 06e33636114ac60a449886707ecc1625957e4447
}

module.exports = formatCurrency

// console.log(formatCurrency('sr-RS', 99.99))
// console.log(formatCurrency('en-GB', 99.99))
// console.log(formatCurrency('ja-JP', 99.99))
