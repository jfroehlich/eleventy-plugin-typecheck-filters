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

