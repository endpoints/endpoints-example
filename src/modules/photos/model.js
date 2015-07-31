const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'photos',
  hasTimestamps: true,
  imageable: function () {
    return this.morphTo(
      'imageable',
      require('../authors/model'),
      require('../series/model'),
      require('../books/model')
    );
  }
};

const classProps = {
  typeName: 'photos',
  filters: {
  },
  relations: [
    'imageable'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
