const config = require('../../knexfile').development;

console.log(config);

const Knex = require('knex')(config);
const Bookshelf = require('bookshelf')(Knex);

console.log('Running migrations...');
Knex.migrate.latest(config);

module.exports = Bookshelf;
