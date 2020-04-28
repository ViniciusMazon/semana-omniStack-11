const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });



  it('should log in', async () => {

    const newOng = await request(app)
    .post('/ongs')
    .send({
      name: "APAD",
      email: "contato@apad.com.br",
      whatsapp: "4700000000",
      city: "Rio do Sul",
      uf: "SC"
    });

    const ongId = newOng.body.id;

    const response = await request(app)
    .post('/sessions')
    .send({
      id: ongId
    });

    expect(response.body).toHaveProperty('name');
  });
});
