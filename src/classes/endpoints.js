const fs = require('fs');
const path = require('path');

const express = require('express');
const Endpoints = require('endpoints');

const modulesDir = path.join(__dirname, '..', 'modules');

const API = new Endpoints.Application({
  router: function () {
    return express.Router();
  },
  routeBuilder: require('express-routebuilder')
});

// register all modules with our application
fs.readdirSync(modulesDir).forEach(function (baseDir) {
  API.register(path.resolve(moduleDir, resource));
});

module.exports = API;
