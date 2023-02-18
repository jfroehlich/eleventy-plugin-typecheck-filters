eleventy-plugin-typecheck-filters
================================================================================

An eleventy plugin for type checks inside templates. At least for nunjucks as
this engine does not come with type check filters.

Little Example:

```nunjucks
{% if content|isArray %}
  {% for item in content %}{% render item.handle, item.config %}{% endfor %}
{% else if content|isString %}
  {{ content }}
{% else if content|isNumber %}
  {{ content|localizeNumber }}
{% endif %}
```

Installation
--------------------------------------------------------------------------------

- Tested with eleventy 2.0.0 but should work with 1.0, too. 

```bash
npm install --save-dev eleventy-plugin-component-tag
```

Then open your Eleventy config file (probably `.eleventy.js`) and use
`addPlugin`:

```javascript
const pluginTypeCheckFilters = require("eleventy-plugin-typecheck-tag");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginTypeCheckFilters);
};
```

You’re only allowed one `module.exports` in your configuration file, so make sure
you only copy the require and the `addPlugin` lines above!

Options
--------------------------------------------------------------------------------

```javascript
const pluginComponentTag = require("eleventy-plugin-typecheck-filters");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginComponentTag, {
      // You can map the names of the filter functions to your liking.
      // The key in this dict is your filter name, the value is the function name.
      // If you don't map a function name, it won't be available in the views.
      nameMapping: {
        // <filterName>: <functionName>
        isString: "isString",
        isArray: "isArray",
        isList: "isArray",
        isNumber: "isNumber",
        isObject: "isObject"
      }
    });
};
```

Filters
--------------------------------------------------------------------------------

- **data|isString** .   
  Returns `true` if the data is a string, `false` otherwise.

- **data|isNumber** .   
  Returns `true` if the data is a number, `false` otherwise.

- **data|isArray** .   
  **data|isList** .  
  Returns `true` if the data is an array, `false` otherwise.

- **data|isObject** .   
  Returns `true` if the data is an object, `false` otherwise.

