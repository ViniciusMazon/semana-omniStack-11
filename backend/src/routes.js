const routes = require('express').Router();

routes.get('/ping', (req, res) => res.send('pong'));

module.exports = routes;
