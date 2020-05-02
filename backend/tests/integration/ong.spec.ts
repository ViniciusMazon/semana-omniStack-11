import request from 'supertest';
import app from '../../src/app';

describe('ONG', () => {

  it('should be able to create a new ONG', async () => {

    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "4700000000",
        city: "Rio do Sul",
        uf: "SC"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
