const connection = require('../database/connection');

class Session {

  async store(id) {

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    return ong;
  }

}

module.exports = new Session();
