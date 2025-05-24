const removeFromArray = function(arr, ...items) {
    for (item of items) {
        while (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1)
        }
    }

    return arr;
};

// Take the extra arguments
// Find the index of each of them
// Use index to take them out of the array

// Do not edit below this line
module.exports = removeFromArray;
