const connection = require('../database/connection');

class Incident {

  async create(ong_id, data) {

    const { title, description, value } = data;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return id;
  }

  async index(page) {

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);


    return { incidents, count }
  }

  async show(id) {
    const incident = await connection('incidents')
      .where('id', id)
      .select('*')
      .first();

    return incident;
  }

  async delete(id) {
    await connection('incidents').where('id', id).delete();
  }

}

module.exports = new Incident()
