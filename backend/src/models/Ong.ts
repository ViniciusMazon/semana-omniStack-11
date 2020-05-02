import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

interface ongCreate {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

class Ong {

  async create(data: ongCreate) {

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

export default new Ong();
