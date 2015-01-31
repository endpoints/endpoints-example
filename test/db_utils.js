const DB = require('../api/classes/database');
const config = require('../knexfile');

module.exports = {
  reset: function () {
    return DB.knex.migrate.rollback(config).then(function () {
      return DB.knex.migrate.latest(config);
    });
  }
}
