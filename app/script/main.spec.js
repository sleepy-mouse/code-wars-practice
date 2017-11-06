{
    const assert = require('assert');
    const mainjs = require('./main.js');
    const array_diff = mainjs.array_diff;
    describe('Array.diff', function () {
        it('Array.diff', function () {
            assert.deepEqual(array_diff([1, 2], [1]), [2]);
            assert.deepEqual(array_diff([1, 2, 2, 2, 3], [2]), [1, 3]);
            assert.deepEqual(array_diff([1, 2, 2], [1]), [2, 2]);
            assert.deepEqual(array_diff([], [1, 2]), []);
            assert.deepEqual(array_diff([1, 2, 2], []), [1, 2, 2]);
        });
    });

    const findShort = mainjs.findShort;
    describe('findShort', function () {
        it('findShort', function () {
            assert.equal(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
            assert.equal(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        });
    });

    const highAndLow = mainjs.highAndLow;
    describe('highAndLow', function () {
        it('highAndLow', function () {
            assert.equal(highAndLow("1 2 3 4 5"), '5 1');
            assert.equal(highAndLow("1 2 -3 4 5"), '5 -3');
            assert.equal(highAndLow("1 9 3 4 -5"), '9 -5');
        });
    });

    const check = mainjs.check;
    describe("Basic tests", _ => {
        assertEquals(check([66, 101], 66), true);
        assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
        assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
        assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
    })
}
