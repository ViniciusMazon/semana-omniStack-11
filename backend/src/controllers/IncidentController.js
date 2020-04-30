const incidentModel = require('../models/Incident');

class IncidentController {

  async create(req, res) {
    const data = req.body;
    const ong_id = req.headers.authorization;

    const id = await incidentModel.store(ong_id, data);

    return res.json({ id })
  }

  async index(req, res) {

    const { page = 1 } = req.query;

    const { incidents, count } = await incidentModel.index(page);

    res.header('X-Total-Count', count['count(*)']);
    return res.json(incidents);
  }

  async delete(req, res) {

    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await incidentModel.show(id);

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }



    await incidentModel.destroy(id);
    return res.status(204).send();
  }
}

module.exports = new IncidentController();
