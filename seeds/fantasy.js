const fantasyDatabase = require('fantasy-database');

exports.seed = function (knex, Promise) {
  var tables = Object.keys(fantasyDatabase);
  return Promise.reduce(tables, function (_, table) {
    var records = fantasyDatabase[table];
    return Promise.all(records.map(function (record) {
      return knex(table).insert(record);
    }));
  }, null);
};
