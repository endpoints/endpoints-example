const controller = require('./controller');

module.exports = {
  post: {
    '/': controller.create()
  },
  get: {
    '/': controller.read(),
    '/:id': controller.read(),
    '/:id/:relation': controller.read()
  },
  put: {
    '/:id': controller.update()
  },
  delete: {
    '/:id': controller.destroy()
  }
};
