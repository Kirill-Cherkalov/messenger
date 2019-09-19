require('dotenv').config({ path: '../.env' });

const shouldLogDebug = process.env.USE_KNEX_DEBUG && JSON.parse(process.env.USE_KNEX_DEBUG);

const config = {
  client: 'mysql',
  useNullAsDefault: true,
  debug: shouldLogDebug,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    typeCast(field, next) {
      if (field.type === 'TINY' && field.length === 1) {
        const value = field.string();
        return value ? value === '1' : null;
      }
      return next();
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
};

module.exports = config;
