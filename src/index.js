const fs = require('fs');
const path = require('path');

const express = require('express');
const Endpoints = require('endpoints');
const bodyParser = require('body-parser');
const routeBuilder = require('express-routeBuilder');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const Example = new Endpoints.Application({
  searchPaths: [modulePath],
  routeBuilder: function (routes, prefix) {
    return routeBuilder(express.Router(), routes, prefix);
  }
});

resources.forEach(function (resource) {
  Example.register(resource);
  app.use(Example.endpoint(resource));
});

app.get('/', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(Example.index(), null, 2));
});

var Table = require('cli-table');
var table = new Table({head: ['resource', 'includes', 'filters']});
Example.manifest().forEach(function (resource) {
  table.push([
    resource.url,
    resource.includes.join(',')||'-',
    resource.filters.join(',')||'-'
  ]);
});
console.log(table.toString());

module.exports = app;
