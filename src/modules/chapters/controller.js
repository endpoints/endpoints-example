const Endpoints = require('endpoints');

module.exports = new Endpoints.Controller({
  adapter: new Endpoints.BookshelfAdapter({
    model: require('./model')
  })
});
