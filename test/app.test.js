const test = require('node:test');
const assert = require('node:assert');

const add = require('../index');

test('10 + 20 should equal 30', () => {
    assert.strictEqual(add(10, 20), 30);
});

test('5 + 5 should equal 10', () => {
    assert.strictEqual(add(5, 5), 10);
});

test('Negative numbers should work', () => {
    assert.strictEqual(add(-5, 5), 0);
});