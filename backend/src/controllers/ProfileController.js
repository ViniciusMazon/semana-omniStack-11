const profileModel = require('../models/Profile');

class ProfileController {

  async index(req, res) {

    const ong_id = req.headers.authorization;

    const incidents = await profileModel.index(ong_id);

    return res.json(incidents);
  }

}

module.exports = new ProfileController();
