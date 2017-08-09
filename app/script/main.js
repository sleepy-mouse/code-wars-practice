const info = console.info;
{
    // Array.diff
    // https://www.codewars.com/kata/array-dot-diff/javascript
    function array_diff(a, b) {
        return a && b ? a.filter(e => !b.includes(e)) : [];
    }

    // info('array_diff([1, 2], [1]) === [2]: %o', _.isEqual(array_diff([1, 2], [1]), [2]));
    // info('array_diff([1, 2, 2, 2, 3], [2]) === [1, 3]: %o', _.isEqual(array_diff([1, 2, 2, 2, 3], [2]), [1, 3]));
    // info('array_diff([1, 2, 2], [1]) === [2, 2]: %o', _.isEqual(array_diff([1, 2, 2], [1]), [2, 2]));
    // info('array_diff([], [1, 2]) === []: %o', _.isEqual(array_diff([], [1, 2]), []));
    // info('array_diff([1, 2, 2], []) === [1, 2, 2]: %o', _.isEqual(array_diff([1, 2, 2], []), [1, 2, 2]));
    module.exports.array_diff = array_diff;
}

