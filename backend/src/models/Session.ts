import connection from '../database/connection';

class Session {

  async create(id: string) {

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    return ong;
  }

}

export default new Session();
