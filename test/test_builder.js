const fs = require('fs');
const _ = require('underscore');

const config = require('./config');
const resources = config.resources;


var raw_template = fs.readFileSync('./test_template.js', {encoding: 'utf8'});
var template = _.template(raw_template);

for(var i = 0; i < resources.length; i++) {
  var resource = resources[i];
  var mocks = require('./mocks/'+resource);

  fs.writeFileSync(resource + "_test.js", template({resource: resource, mocks: mocks}));
}
