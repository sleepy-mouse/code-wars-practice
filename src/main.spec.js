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
    describe("Basic tests", () => {
        it('Find element in array', () => {
            assert.equal(check([66, 101], 66), true);
            assert.equal(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
            assert.equal(check(['t', 'e', 's', 't'], 'e'), true);
            assert.equal(check(['what', 'a', 'great', 'kata'], 'kat'), false);
        });
    });

    const solve = mainjs.solve;
    describe("Numbers in strings", () => {
        it('Numbers in strings', () => {
            assert.equal(solve('gh12cdy695m1'), 695);
            assert.equal(solve('2ti9iei7qhr5'), 9);
            assert.equal(solve('vih61w8oohj5'), 61);
            assert.equal(solve('f7g42g16hcu5'), 42);
            assert.equal(solve('lu1j8qbbb85'), 85);
        });
    });
}