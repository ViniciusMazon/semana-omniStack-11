import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

const routes = Router();

import session from './controllers/SessionController';
import ping from './controllers/PingController';
import ong from './controllers/OngController';
import incident from './controllers/IncidentController';
import profile from './controllers/ProfileController';

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), session.create);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ong.store);
routes.get('/ongs', ong.index);

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required().positive()
  })
}), incident.create);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incident.index);

routes.delete('/incidents/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incident.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), profile.index);

routes.get('/ping', ping.index);

export default routes;
