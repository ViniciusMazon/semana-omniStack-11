const connection = require('../database/connection');

class Profile {

  async index(ong_id) {

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return incidents;
  }
}

module.exports = new Profile();
