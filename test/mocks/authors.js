var mock_resource = {
  "authors": {
    name: "Ashley Williams",
    date_of_birth: "1986-05-05"
  }
};
var mock_update = {
  "authors": {
    name: "Ashley Williams",
    date_of_birth: "1986-05-05",
    date_of_death: " 2015-01-30"
  }
};
var update_attr = 'date_of_death';

exports.mock_resource = mock_resource;
exports.mock_update = mock_update;
exports.update_attr = update_attr;
