const request = require('supertest')
const app = require('../server')

describe('Post Endpoints', () => {//-------------------------> Describe groups together related tests.
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/')
      .send({
        url: 'agwa/dan'
      })
    expect(res.statusCode).toEqual(200)
  })
})