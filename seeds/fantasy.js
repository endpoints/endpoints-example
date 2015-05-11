const fantasyDatabase = require('fantasy-database');

exports.seed = function (knex, Promise) {
  var tables = [
    'photos',
    'series',
    'authors',
    'books',
    'chapters',
    'stores',
    'books_stores'
  ];
  return Promise.each(tables, function (table) {
    return Promise.each(fantasyDatabase[table], function (record) {
      return knex(table).insert(record);
    });
  });
};
