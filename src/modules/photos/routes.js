const controller = require('./controller');
const schema = require('./schema');

exports.map = {
  post: {
    '/': controller.create({
      schema: schema
    }),
    '/:id/links/:relation': controller.createRelation()
  },
  get: {
    '/': controller.read(),
    '/:id': controller.read(),
    '/:id/:related': controller.readRelated(),
    '/:id/links/:relation': controller.readRelation()
  },
  patch: {
    '/:id': controller.update({
      schema: schema
    }),
    '/:id/links/:relation': controller.updateRelation()
  },
  delete: {
    '/:id': controller.destroy(),
    '/:id/links/:relation': controller.destroyRelation()
  }
};
