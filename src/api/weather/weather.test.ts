import request from 'supertest';
import app from 'server/app';
import { mongo } from 'server/mongo';

beforeAll(async () => {
  await mongo.dropAllCollections();
});

afterAll(async (done) => {
  await mongo.dropAllCollections();
  await mongo.close();
  done();
});

describe('Weather to Temp tests', () => {
  test('Seeding data - Should respond with status code 200', async () => {
    // seed data first
    const response = await request(app).get('/spotify');
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSnapshot();
  });

  test('Checking weather without body - Should respond with status code 422', async () => {
    const response = await request(app).post('/weather').send();
    expect(response.status).toEqual(422);
    expect(response.body).toMatchSnapshot();
  });

  test('Checking weather of Alaska - Should respond with status code 200', async () => {
    const response = await request(app).post('/weather').send({
      city: 'alaska',
    });
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSnapshot();
  });

  test('Checking weather of Alaska By Coordinates - Should respond with status code 200', async () => {
    const response = await request(app)
      .post('/weather')
      .send({
        coordinates: {
          lat: 64.0003,
          lon: -150.0003,
        },
      });
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSnapshot();
  });
});
