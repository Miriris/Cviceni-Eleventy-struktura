const pluginSass = require('eleventy-plugin-sass')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/obrazky')

	eleventyConfig.addPlugin(pluginSass, {
		watch: ['src/styly/index.scss'],
	})

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			data: 'data',
			layouts: 'layouty',
			passthroughFileCopy: true,
			templateFormats: ['html', 'njk', 'md'],
			htmlTemplateEngine: 'njk',
			markdownTemplateEngine: 'njk',
		},
	}
}
