const Endpoints = require('endpoints');

module.exports = new Endpoints.Controller({
  source: new Endpoints.BookshelfSource({
    model: require('./model')
  })
});
