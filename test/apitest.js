// declare supertest
const request = require('supertest')
const expect = require("chai").expect
//Import server
const server = require('../createServer.js')


// Testing
// get all users posts
describe('/', () => {
let api
before(() => {
    api = server.listen(5000, () => console.log('Testing server is online'))
    })

after(done => {
    console.log ('Server is offline')
    api.close(done)
})
    it('responds to get / with status 200', done => {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('respond with json containing a list of all posts by users', done =>  {
        request(server)
            .get('/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    let data = {
        name: "Johnny",
        post: "Eating food is nice",
        gif: "",
        emoji: ["https://i.pinimg.com/originals/85/65/50/856550aa773911d00b76b24aaa4bc467.png"],
        comments: []
  }
    it('should enter a new post into the external file with a status of 201', done =>  {
            request(server)
            .post('/posts')
            .send(data)
            .set ('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            })
        })
    let comment = {
        name: "dr Who",
        comment: "i don't like darlek",
        emoji: []
    }
    it('should enter a comment under a user post with a status of 201', done =>  {
            request(server)
            .post('/posts/2')
            .send(comment)
            .set ('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            })
        })
it('responds to invalid method request with 405', done => {
            request(api)
                .post('/')
                .expect(405, done)
        })

})

