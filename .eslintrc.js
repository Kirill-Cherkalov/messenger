module.exports = {
	'extends': 'prettier',
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 6,
    "sourceType": "module",
    'project': './tsconfig.json',
  },
	'env': {
		'es6': true,
		'node': true,
	},
	'rules': {
    'prettier/prettier': 'error',
		'indent': [ 'error', 2 ],
		'linebreak-style': 'off',
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ],
		'camelcase': 'error',
		'max-params': [ 'error', 4 ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'max-len': [ 'error', { 'code': 120 } ],
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'brace-style': 'error',
		'no-lonely-if': 'error',
		'curly': 'error',
		'no-multiple-empty-lines': 'error',
		'key-spacing': [ 'error', { 'beforeColon': false } ],
	},
	'plugins': [ 'prettier' ],
};
