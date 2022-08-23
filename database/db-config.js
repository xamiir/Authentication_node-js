// const knex = require('knex');

// const config = require('../knexfile');

// module.exports = knex(config.development);
const knex = require('knex')

const configs = require('../knexfile.js')

const env = process.env.NODE_ENV || 'development'

module.exports = knex(configs[env])
