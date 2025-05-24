const sumAll = function(num1, num2) {
    // Throw out non-numbers, non-integers, negative numbers
    if (
        (num1 < 0 || num2 < 0) ||
        (!Number.isInteger(num1) || !Number.isInteger(num2))
    ) {
        return "ERROR";
    }

    // Sort low to high
    let arr = [num1, num2].sort((a, b) => a - b);

    let newItems = [];
    for (i = arr[0] + 1; i < arr[1]; i++) {
        newItems.push(i);
    }

    // Difference between nums
    arr.splice(1, 0, newItems)
    arr = arr.flat()

    // Sum them up
    return arr.reduce((a, b) => a + b)

};

// Do not edit below this line
module.exports = sumAll;
//         (num1 < 0 || num2 < 0) ||
