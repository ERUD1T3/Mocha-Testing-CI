const assert = require('assert');

const pluralize = require('../lib/example').pluralize;

describe('Testing pluralize in example.js', () => {
    it('keeps singular when count is 1', () => {
        assert.strictEqual(pluralize(1, 'cat'), '1 cat');
    });
});