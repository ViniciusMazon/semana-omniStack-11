import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('Session', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should log in', async () => {
      const response = await request(app)
      .post('/sessions')
      .send({
        id: '1'
      });

    expect(response.body).toHaveProperty('name');
  });
});
