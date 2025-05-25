const fibonacci = function(idx) {
    let arr = [0, 1];
    for (i = 2; i < idx; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr;
};

// Do not edit below this line
module.exports = fibonacci;
