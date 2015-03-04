const Endpoints = require('endpoints');

module.exports = new Endpoints.Controller({
  source: new Endpoints.BookshelfSource({
    model: require('./model'),
    schema: {
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        date_of_birth: {
          type: 'string',
          format: 'date-time'
        },
        date_of_death: {
          type: 'string',
          format: 'date-time'
        }
      }
    }
  })
});
