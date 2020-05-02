import { Joi } from 'celebrate';

export default {
  createSessionBody: Joi.object().keys({
    id: Joi.string().required()
  }),

  createOngBody: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  }),

  createIncidentHeader: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),

  createIncidentBody: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required().positive()
  }),

  listIncidentsQuery: Joi.object().keys({
    page: Joi.number()
  }),

  deleteIncidentHeader: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),

  deleteIncidentParams: Joi.object().keys({
    id: Joi.number().required()
  }),

  listProfileHeader: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
}
