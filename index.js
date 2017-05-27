'use strict'
const lang = require('./languages.json')

/**
 * Format Currency
 * @param {String}   currency   ISO 4217:2015 Codes for the representation of currencies
 * @param {Number}   amount
 * @return {String}
 */

function formatCurrency(language, amount) {
	return new Intl.NumberFormat(language, {
		style: 'currency',
		currency: lang[language]['currency'],
    minimumFractionDigits: lang[language]['minimumFractionDigits']
	}).format(amount)
}

module.exports = formatCurrency

console.log(formatCurrency('en-US',  123))
console.log(formatCurrency('sr-RS',  123))

