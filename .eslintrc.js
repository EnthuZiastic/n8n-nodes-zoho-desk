module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	ignorePatterns: [
		'.eslintrc.js',
		'gulpfile.js',
		'**/*.js',
		'**/node_modules/**',
		'**/dist/**',
	],
	plugins: ['@typescript-eslint', 'n8n-nodes-base'],
	extends: ['plugin:n8n-nodes-base/nodes'],
	rules: {
		'n8n-nodes-base/node-dirname-against-convention': 'off',
		'n8n-nodes-base/cred-class-field-display-name-missing-oauth2': 'off',
		'n8n-nodes-base/node-param-description-wrong-for-return-all': 'off',
		'@typescript-eslint/no-unsafe-argument': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/restrict-template-expressions': 'warn',
	},
};
