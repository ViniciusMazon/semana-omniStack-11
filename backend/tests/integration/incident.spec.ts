import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('Incident', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should must add a new case', async () => {

    const response = await request(app)
      .post('/incidents')
      .set({
        Authorization: 1
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

    const response = await request(app)
      .delete('/incidents/1')
      .set({
        authorization: 1,
      });

    expect(response.status).toEqual(204);
  });

});
