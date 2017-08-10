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

    const findShort = require('./main.js').findShort;
    describe('findShort', function () {
        it('findShort', function () {
            assert.equal(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
            assert.equal(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        });
    });

    const highAndLow = require('./main.js').highAndLow;
    describe('highAndLow', function () {
        it('highAndLow', function () {
            assert.equal(highAndLow("1 2 3 4 5"), '5 1');
            assert.equal(highAndLow("1 2 -3 4 5"), '5 -3');
            assert.equal(highAndLow("1 9 3 4 -5"), '9 -5');
        });
    });
}
