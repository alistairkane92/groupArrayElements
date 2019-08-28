const groupArrayElements = require('./group-array-elements');
const assert = require('assert');

assert.deepStrictEqual(groupArrayElements([1, 2, 3], 3), [ [1], [2], [3] ]);
assert.deepStrictEqual(groupArrayElements([1, 2, 3, 4], 3), [ [1, 2], [3], [4] ]);
assert.deepStrictEqual(groupArrayElements([1, 2, 3, 4, 5], 3), [ [1, 2], [3], [4, 5] ]);
assert.deepStrictEqual(groupArrayElements([1, 2, 3, 4, 5, 6], 3), [ [1, 2], [3, 4], [5, 6] ]);
assert.deepStrictEqual(groupArrayElements([1, 2, 3, 4, 5, 6, 7], 3), [ [1, 2, 3], [4, 5, 6], [7] ]);