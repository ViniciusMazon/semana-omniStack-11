import connection from '../database/connection';

class Profile {

  async index(ong_id: string) {

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return incidents;
  }
}

export default new Profile();
