/* eslint-env node */
const lib = {};
module.exports = lib;

/**
 * Checks whether the given input is a string
 * 
 * @param {*} input 
 * @returns {boolean}
 */
lib.isString = function (input) {
	return typeof input === "string";
}

/**
 * Checks whether the given input is a number.
 * 
 * @param {*} input 
 * @returns {boolean}
 */
lib.isNumber = function (input) {
	return typeof input === "number";
}

/**
 * Checks whether the given input is an object.
 * 
 * @param {*} input 
 * @returns {boolean}
 */
lib.isObject = function (input) {
	return typeof input === "object";
}

/**
 * Checks whether the given input is an array.
 * 
 * @param {*} input 
 * @returns {boolean}
 */
lib.isArray = function (input) {
	return Array.isArray(input);
}
