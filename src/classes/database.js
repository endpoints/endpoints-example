const config = require('../../knexfile');

// reset database at each startup
try {
  require('fs').unlinkSync(config.connection.filename);
} catch (e) {}

const Knex = require('knex')(config);
const Bookshelf = require('bookshelf')(Knex);

console.log('Running migrations...');
Knex.migrate.latest(config).then(function () {
  Knex.seed.run(config);
});

module.exports = Bookshelf;
