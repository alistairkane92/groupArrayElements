/**
 * Divides the contents of an array by a number of groups
 * 
 * If length of array divided by number groups leaves a remainder, 
 * the final sub-array will have a length of the remainder
 * 
 * @example
 * groupArrayElements([1, 2, 3, 4, 5], 3); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 * 
 * @param {array} arr Original array
 * @param {number} groups Number of groups to divide by
 * 
 * @returns {array} Array of sub-arrays
 */
const groupArrayElements = (arr, groups) => {
    let result;

    if (arr && arr.length > 0 && groups > 0) {
        const chunk = (arr, groups) => {
            let chunks = [];
            let step = Math.ceil(arr.length / groups);
            for (let i = 0; i < arr.length; i += step) {
                let slice = arr.slice(i, i + step);
                chunks.push(slice);
            }
            return chunks;
        }

        let remainder = arr.length % groups;
        if (remainder) {
            // Manually assigns the final chunk to length of remainder and chunks the rest
            let evenIndex = arr.length - remainder;
            let evenCopy = arr.slice(0, evenIndex);
            result = chunk(evenCopy, groups - 1);
            result.push(arr.slice(evenIndex, arr.length))
        } else {
            result = chunk(arr, groups);
        }
    } else {
        throw new Error('Function requirements not met (' + arr + ', ' + groups + ')');
    }

    return result;
}

module.exports = groupArrayElements;