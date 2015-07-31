const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'series',
  hasTimestamps: true,
  books: function () {
    return this.hasMany(require('../books/model'));
  },
  photos: function () {
    return this.morphOne(require('../photos/model'), 'imageable');
  }
};

const classProps = {
  typeName: 'series',
  filters: {
    title: function (qb, value) {
      return qb.whereIn('title', value);
    }
  },
  relations: [
    'books',
    'photos'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
