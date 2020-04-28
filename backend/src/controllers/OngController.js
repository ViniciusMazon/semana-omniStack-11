const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

class OngController {

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    res.json({ id });
  }

  async index(req, res) {

    const ongs = await connection('ongs').select('*');
    res.json(ongs);
  }

}

module.exports = new OngController();
