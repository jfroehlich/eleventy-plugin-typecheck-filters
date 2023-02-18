/* eslint-env node */
const lib = require("./filters");

/**
 * Eleventy plugin method to register all filters at once.
 * 
 * @param {object} api The eleventyConfig object
 * @param {object} settings Custom settings for the filters.
 */
function _plugin(api, settings={}) {
	const opts = Object.assign({
		nameMapping: {
			// <filterName>: <functionName>
			isString: "isString",
			isArray: "isArray",
			isList: "isArray",
			isNumber: "isNumber",
			isObject: "isObject"
		}
	}, settings);

	// Ok, now register the filters...
	Object.keys(opts.nameMapping).forEach(name => {
		api.addFilter(name, lib[opts.nameMapping[name]]);
	});
}
module.exports = _plugin;
