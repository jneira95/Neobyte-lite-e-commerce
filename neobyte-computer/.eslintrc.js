module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'airbnb-base',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'html'],
	rules: {
		'linebreak-style': 0,
		'global-require': 0,
		'eslint linebreak-style': [0, 'error', 'windows'],
		'class-methods-use-this': 'off',
		'no-useless-constructor': 'off',
		'no-empty-function': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off'
	}
};
