const superagent = require('superagent');
const expect = require('expect.js');

const config = require('./config');
const DB = require('./db_utils');

describe('API server', function(){
  var resource = "<%= resource %>";
  var mock_resource = <%= JSON.stringify(mocks.mock_resource) %>;
  var mock_update = <%= JSON.stringify(mocks.mock_update) %>;
  var update_attr = <%= JSON.stringify(mocks.update_attr) %>;

  var collection_url = config.host + config.port + config.namespace + '/' + resource;
  var id;
  var element_url;

  describe('with created instance of ' + resource, function(){
    beforeEach(function(done){
      DB.reset().then(function() {
        superagent.post(collection_url)
          .send(mock_resource)
          .end(function(e, res){
            expect(res.status).to.equal(201);
            id = res.body[resource].id;
            element_url = collection_url + '/' + id;
            done();
          });
      }, done);
    });

    it('retrieves a collection of ' + resource, function(done){
      superagent.get(collection_url)
        .end(function(e, res){
          expect(e).to.eql(null);
          expect(res.body[resource].map(function(item){return item.id;})).to.contain(id);
          done();
        });
    });

it('retrieves an instance of ' + resource, function(done){
      superagent.get(element_url)
        .end(function(e,res){
          expect(e).to.eql(null);
          expect(typeof res.body).to.eql('object');
          expect(res.body.id).to.eql(id);
          done();
        });
    });

    describe('an update happens', function(){

      beforeEach(function(done){
        superagent.put(element_url)
          .send(mock_update)
          .end(function(e, res){
            expect(e).to.eql(null);
            expect(typeof res.body).to.eql('object');
            done();
          });
      });

      it('checks an instance of ' + resource, function(done){
        superagent.get(element_url)
          .end(function(e, res){
            expect(e).to.eql(null);
            expect(typeof res.body).to.eql('object');
            expect(res.body[update_attr]).to.eql(mock_update[update_attr]);
            expect(res.body.id).to.eql(id);
            done();
        });
      });
    });

    it('removes an instance of ' + resource, function(done){
      superagent.del(element_url)
        .end(function(e,res){
          expect(e).to.eql(null);
          expect(typeof res.body).to.eql('object');
          done();
        });
    });
  });
});
