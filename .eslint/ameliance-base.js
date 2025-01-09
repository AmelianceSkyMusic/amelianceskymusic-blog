module.exports = {
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'react/self-closing-comp': 'warn',

		'no-console': ['warn'],

		// require trailing commas in multiline object literals
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],

		// disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
		// https://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': ['error', 'tab', { indentLogicalExpressions: true }],
	},

};
