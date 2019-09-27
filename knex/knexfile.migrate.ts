require('ts-node/register');
require('dotenv').config({ path: '../.env' });

module.exports = require('./knexfile.ts').default;
