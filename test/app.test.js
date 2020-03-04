var expect = require('chai').expect;
var request = require('request');


describe('Testing mian page in app.js', () => {
    it('Main page content', (done) => {
        request('http://localhost:8080', function (error, response, body) {
            expect(body).to.equal('Hello World');
            done();
        });
    });
})