var App = window.App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8080/api',
  headers: {
    Accept: 'application/vnd.ember+json'
  },
  // Workaround where REST URLs were getting camelCased
  // https://github.com/ember-cli/ember-cli/issues/2906
  pathForType: function(type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  }
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  keyForRelationship: function(key, type) {
    if (type === 'belongsTo') {
      key += '_id';
    }
    return key;
  }
});

App.SeriesModel = DS.Model.extend({
  title: DS.attr('string'),
  books: DS.hasMany('books')
});

App.AuthorModel = DS.Model.extend({
  name: DS.attr('string'),
  date_of_birth: DS.attr('date'),
  date_of_death: DS.attr('date'),
  books: DS.hasMany('books', {
    async:true
  })
});

App.BookModel = DS.Model.extend({
  author: DS.belongsTo('author', {
    async: true
  }),
  series: DS.belongsTo('series', {
    async: true
  }),
  chapters: DS.hasMany('chapter', {
    async: true
  }),
  date_published: DS.attr('date'),
  title: DS.attr('string')
});

App.ChapterModel = DS.Model.extend({
  title: DS.attr('string'),
  ordering: DS.attr('integer'),
  book: DS.belongsTo('book', {
    async: true
  })
});

App.AuthorsRoute = Ember.Route.extend({
  model: function () {
    return this.store.findQuery('author', {include:'books'});
  }
});

App.SeriesRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('series');
  }
});

App.BooksRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('book');
  }
});

App.ChaptersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('chapter');
  }
});

App.Router.map(function () {
  this.route('series');
  this.route('authors');
  this.route('books');
  this.route('chapters');
});
