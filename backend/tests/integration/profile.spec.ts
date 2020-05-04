import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('Profile', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should display the profiles', async () => {
    const response = await request(app)
      .get('/profile')
      .set({
        Authorization: 1
      });

    expect(response.body.length > 0);
  });
});
