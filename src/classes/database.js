const config = require('../../knexfile');

require('fs').unlink(config.connection.filename);

const Knex = require('knex')(config);
const Bookshelf = require('bookshelf')(Knex);

console.log('Running migrations...');
Knex.migrate.latest(config).then(function () {
  Knex.seed.run(config);
});

module.exports = Bookshelf;
