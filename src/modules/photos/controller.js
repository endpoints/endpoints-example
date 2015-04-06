const API = require('../../classes/api');
const schema = require('./schema');

module.exports = new API.Controller({
  model: require('./model')
});
