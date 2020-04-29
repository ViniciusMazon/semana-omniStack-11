const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

class Ong {

  async store(data) {

    const { name, email, whatsapp, city, uf } = data;
    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return (id);
  }


  async index() {
    const response = await connection('ongs').select('*');
    return response;
  }
}

module.exports = new Ong();
