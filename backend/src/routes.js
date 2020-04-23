const routes = require('express').Router();

const ping = require('./controllers/Ping');

routes.get('/ping', ping.index);

module.exports = routes;
