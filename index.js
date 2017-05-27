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
		currency: 'RSD',//lang[language]['currency'],
    minimumFractionDigits: 2 //lang[language]['minimumFractionDigits']
	}).format(amount)
}

module.exports = formatCurrency

console.log(formatCurrency('sr-RS', 99.99))
