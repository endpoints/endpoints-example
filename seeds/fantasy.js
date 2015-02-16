const fantasyDatabase = require('fantasy-database');

exports.seed = function (knex, Promise) {
  var tables = [
    'authors',
    'books',
    'chapters',
    'series',
    'stores',
    'books_stores'
  ];
  return Promise.reduce(tables, function (_, table) {
    var records = fantasyDatabase[table];
    return Promise.all(records.map(function (record) {
      return knex(table).insert(record);
    }));
  }, null);
};
