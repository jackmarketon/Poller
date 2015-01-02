var parse = require('co-body'),
    db = require('../config/db'),
    wrap = require('co-monk'),
    Clients = wrap(db.get('client'));

module.exports = function(app, route) {

  // ALL Clients
  app.use(route.get('/api/clients', function *() {
    this.body = yield Clients.find({});
  }));

  // FIND Clients BY ID
  app.use(route.get('/api/clients/:id', function *(id) {
    this.body = yield Clients.find({_id: id});
  }));

  // CREATE Clients
  app.use(route.post('/api/clients', function *(id) {
    var newClient = yield parse(this);
    newClient.created_on = new Date;
    newClient.updated_on = new Date;
    this.body = yield Clients.insert(newClient);
    if(this.body) {
      this.status = 201;
    }
  }));

  // UPDATE Clients
  app.use(route.put('/api/clients/:id', function *(id) {
    var updatedClient = yield parse(this);
    updatedClient.updated_on = new Date;
    this.body = yield Clients.updateById(id, updatedClient);
  }));

  // DELETE Clients
  app.use(route.del('/api/clients/:id', function *(id) {
    this.body = yield Clients.remove({"_id": id});
    if(this.body) {
      this.status = 200;
    }
  }));

};