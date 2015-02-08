var mock_resource = {
  "books": {
    author_id: 1,
    title: "Spacecats! An astronomical tutorial on building single page web applications with AngularJS",
    date_published: "jan 1 2015"
  }
};
var mock_update = {
  "books" : {
     author_id: 1,
    title: "Spacecats! An astronomical tutorial on building single page web applications with AngularJS",
    date_published: "jan 30 2015"
  }
};
var update_attr = 'date_published';

exports.mock_resource = mock_resource;
exports.mock_update = mock_update;
exports.update_attr = update_attr;
