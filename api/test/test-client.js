process.env.NODE_ENV = 'test';

var _id = '';

var app = require('../app.js');
var co = require('co');
var should = require('should');
var request = require('supertest').agent(app.listen());

var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/poller-test');
var Client = wrap(db.get('clients'));

var mock = require('../exampleModels/clientModel');

var removeAll = function(done){
  co(function *(){
    yield Client.remove({});
  })(done);
};

before(function (done) {
  removeAll(done);
});

describe('Testing Client Url', function() {

  it('POST New Client', function(){
    it('creates new client and responds with json success message', function(done){
      request
        .post('/api/client')
        .send(mock)
        .expect(201)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          _id = res.body._id;
          done();
        });
    });
  });

  it('GET List of Clients', function(){
    it('responds with a list of client items in JSON', function(done){
      co(function *(){
        request
          .get('/api/clients')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
        })(done);
    });
  });

  it('GET Client by ID', function(){
    it('responds with a single client item in JSON', function(done){
      co(function *(){
        request
          .get('/api/clients/'+ _id )
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
        })(done);
    });
  });

  it('PUT Client by ID', function(){
    it('updates client item in return JSON', function(done){
      co(function *(){
        request
          .post('/api/clients/'+ _id)
          .send({ "name": "Client Example" })
          .expect(200);
        })(done);
    });
  });

  it('DELETE Client by ID', function(){
    it('should delete client and return 204 status code', function(done){
      co(function *(){
        request
          .del('/api/clients/'+ _id)
          .expect(204);
        })(done);
    });
  });

});