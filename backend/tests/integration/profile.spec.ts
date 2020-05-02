import request from 'supertest';
import app from '../../src/app';

describe('Profile', () => {

  it('should display the profiles', async () => {

    // Create an NGO
    const newOng = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "4700000000",
        city: "Rio do Sul",
        uf: "SC"
      });

    // Create an incident
    await request(app)
      .post('/incidents')
      .set({
        Authorization: newOng.body.id
      })
      .send({
        title: "Caso Cadelinha11",
        description: "Cadelinha está bem",
        value: 150
      });

    // Get incidents
    const response = await request(app)
      .get('/profile')
      .set({
        Authorization: newOng.body.id
      });

    expect(response.body.length > 0);
  });
});
