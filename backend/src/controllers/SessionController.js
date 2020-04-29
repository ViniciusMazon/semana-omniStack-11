const sessionModel = require('../models/Session');

class SessionController {

  async create(req, res) {

    const { id } = req.body;

    const ong = await sessionModel.store(id);

    if(!ong) {
      return res.status(400).json({error: 'No ONG found with this ID.'});
    }

    return res.json(ong);
  }

}

module.exports = new SessionController();
