const routes = require('express').Router();

const ping = require('./controllers/Ping');
const users = require('./controllers/Users');

routes.get('/ping', ping.index);

routes.post('/users', users.store);

module.exports = routes;
