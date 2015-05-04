const thisFolderName = __dirname.split('/').pop();

const API = require('../../classes/api');

module.exports = new API.Controller({
  model: require('./model'),
  basePath: thisFolderName
});
