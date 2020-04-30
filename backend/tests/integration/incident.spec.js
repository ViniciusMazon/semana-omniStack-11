const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {

  it('should must add a new case', async () => {

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
      .post('/incidents')
      .set({
        Authorization: ongId
      })
      .send({
        title: "Caso Cadelinha11",
        description: "Cadelinha está bem",
        value: 150
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should display the cases', async () => {
    const response = await request(app)
      .get('/ongs');

    const responseLength = response.body.length;
    expect(responseLength > 0);
  });

  it('should exclude a case', async () => {

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

    const newIncident = await request(app)
      .post('/incidents')
      .set({
        Authorization: ongId
      })
      .send({
        title: "Caso Cadelinha11",
        description: "Cadelinha está bem",
        value: 150
      });

    const incidentId = newIncident.body.id;

    const response = await request(app)
      .delete(`/incidents/${incidentId}`)
      .set({
        Authorization: ongId
      });

    expect(response.status).toEqual(204);
  });

});
