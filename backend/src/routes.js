const routes = require('express').Router();

const session = require('./controllers/SessionController');
const ping = require('./controllers/PingController');
const ong = require('./controllers/OngController');
const incident = require('./controllers/IncidentController');
const profile = require('./controllers/ProfileController');

routes.post('/sessions', session.store);

routes.get('/ping', ping.index);

routes.post('/ongs', ong.store);
routes.get('/ongs', ong.index);

routes.post('/incidents', incident.store);
routes.get('/incidents', incident.index);
routes.delete('/incidents/:id', incident.destroy);

routes.get('/profile', profile.index);

module.exports = routes;
