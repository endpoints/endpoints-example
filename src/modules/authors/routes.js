const controller = require('./controller');
const booksController = require('../books/controller');
const chaptersController = require('../chapters/controller');

module.exports = {
  post: {
    '/': controller.create({method: 'createWithRandomBook'})
  },
  get: {
    '/': controller.read(),
    '/:id': controller.read({one: true}),
    '/:id/:relation': controller.readRelation()
  },
  put: {
    '/:id': controller.update()
  },
  delete: {
    '/:id': controller.destroy()
  }
};
