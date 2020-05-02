import { Router } from 'express';
import { celebrate } from 'celebrate';

import validationSchema from './validations/schema';
const routes = Router();

import session from './controllers/SessionController';
import ping from './controllers/PingController';
import ong from './controllers/OngController';
import incident from './controllers/IncidentController';
import profile from './controllers/ProfileController';

routes.post('/sessions', celebrate({ body: validationSchema.createSessionBody }), session.store);

routes.post('/ongs', celebrate({ body: validationSchema.createOngBody }), ong.store);

routes.get('/ongs', ong.index);

routes.post('/incidents', celebrate({
  headers: validationSchema.createIncidentHeader,
  body: validationSchema.createIncidentBody
}), incident.store);

routes.get('/incidents', celebrate({ query: validationSchema.listIncidentsQuery }), incident.index);

routes.delete('/incidents/:id', celebrate({
  headers: validationSchema.deleteIncidentHeader,
  params: validationSchema.deleteIncidentParams
}), incident.destroy);

routes.get('/profile', celebrate({ headers: validationSchema.listProfileHeader }), profile.index);

routes.get('/ping', ping.index);

export default routes;
