const controller = require('./controller');
const schema = require('./schema');

module.exports = {
  post: {
    '/': controller.create({
      method: 'createWithRandomBook',
      validate: schema
    })
  },
  get: {
    '/': controller.read(),
    '/:id': controller.read({
      one: true
    }),
    '/:id/:relation': controller.readRelation()
  },
  put: {
    '/:id': controller.update({
      validate: schema
    })
  },
  delete: {
    '/:id': controller.destroy()
  }
};
