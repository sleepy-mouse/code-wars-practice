const info = console.info; {
    /**
     * Array.diff
     * https://www.codewars.com/kata/array-dot-diff/javascript
     * @param a
     * @param b
     * @returns {Array}
     */
    function array_diff(a, b) {
        return a && b ? a.filter(e => !b.includes(e)) : [];
    }

    module.exports.array_diff = array_diff;
} {
    /**
     * Shortest Word
     * https://www.codewars.com/kata/shortest-word/javascript
     * @param s
     * @returns {number}
     */
    function findShort(s) {
        return Math.min(...s.split(/\s+/).map(e => e.length));
    }

    module.exports.findShort = findShort;
} {
    /**
     * Highest and Lowest
     * https://www.codewars.com/kata/highest-and-lowest/javascript
     * @param numbers
     */
    function highAndLow(numbers) {
        const nums = numbers.split(/\s+/);
        const max = Math.max(...nums.map(Number));
        const min = Math.min(...nums.map(Number));
        return `${max} ${min}`;
    }

    module.exports.highAndLow = highAndLow;
} {
    /**
     * https://www.codewars.com/kata/you-only-need-one-beginner/train/javascript
     */
    function check1(a, x) {
        return a.findIndex(e => e === x) !== -1;
    }

    function check2(a, x) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === x)
                return true;
        }
        return false;
    }

    function check3(a, x) {
        return a.includes(x);
    }
    module.exports.check = check2;
} {
    /**
     * https://www.codewars.com/kata/numbers-in-strings/train/javascript
     */
    let solve = s => Math.max(...s.match(/\d+/g));
    module.exports.solve = solve;
}