const reverseString = function(str) {
    strArray = str.split("");
    revArray = [];
    for (let char in strArray) {
        revArray.unshift(strArray[char]);
    };
    return revArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
