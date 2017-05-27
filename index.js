'use strict'

const lang = require('./languages.json')

/**
 * Format Currency
 * @param {String}   language   'en-US'
 * @param {Number}   amount     99.99
 * @return {String}
 */

function formatCurrency(language, amount) {
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
}

module.exports = formatCurrency

console.log(formatCurrency('sr-RS', 99.99))
