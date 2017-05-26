'use strict'

/**
 * Format Currency
 * @param {String}   currency   ISO 4217:2015 Codes for the representation of currencies
 * @param {Number}   amount
 * @return {String}
 */

function formatCurrency(currency, amount) {
	return new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: currency
	}).format(amount)
}

module.exports = formatCurrency
