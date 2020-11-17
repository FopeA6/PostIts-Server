// declare supertest
const request = require('supertest')
const expect = require("chai").expect
//Import server
const server = require('../createServer.js')


// Testing
// get all users posts
describe('GET /posts', function () {
    it('respond with json containing a list of all posts by users', function (done) {
        request(server)
            .get('/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
