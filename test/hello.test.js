const expect = require('chai').expect;
const hellofn = require('../lib/hello')


describe('Testing main page in app.js', () => {
    it('Main page message', (done) => {
        let msg = hellofn()
        expect(msg).to.equal('Hello World! from Dev Server');
        done();
    });
})