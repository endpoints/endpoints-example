const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const routeBuilder = require('express-routebuilder');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);

const app = express();

const API = require('./classes/api');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

resources.forEach(function (resource) {
  API.register(resource);
  app.use(API.endpoint(resource));
});

app.get('/', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

/* currently non functional
var Table = require('cli-table');
var table = new Table({head: ['resource', 'includes', 'filters']});
API.manifest().forEach(function (resource) {
  table.push([
    resource.url,
    resource.includes.join(',')||'-',
    resource.filters.join(',')||'-'
  ]);
});
console.log(table.toString());
*/
module.exports = app;
