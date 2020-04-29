const ongModel = require('../models/Ong');

class OngController {

  async store(req, res) {
    const data = req.body;

    const id = await ongModel.store(data);

    res.json({ id });
  }

  async index(req, res) {

    const ongs = await ongModel.index();
    res.json(ongs);
  }

}

module.exports = new OngController();
