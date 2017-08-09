{
    const assert = require('assert');
    const array_diff = require('./main.js').array_diff;
    describe('Array.diff', function () {
        it('Array.diff', function () {
            assert.deepEqual(array_diff([1, 2], [1]), [2]);
            assert.deepEqual(array_diff([1, 2, 2, 2, 3], [2]), [1, 3]);
            assert.deepEqual(array_diff([1, 2, 2], [1]), [2, 2]);
            assert.deepEqual(array_diff([], [1, 2]), []);
            assert.deepEqual(array_diff([1, 2, 2], []), [1, 2, 2]);
        });
    });
}
