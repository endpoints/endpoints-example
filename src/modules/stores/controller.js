const thisFolderName = __dirname.split(require("path").sep).pop();

const API = require('../../classes/api');

module.exports = new API.Controller({
  model: require('./model'),
  basePath: thisFolderName
});
