const Endpoints = require('endpoints');
const BookshelfSource = require('endpoints-source-bookshelf');

module.exports = new Endpoints({
  source: new BookshelfSource({
    model: require('./model')
  })
});
