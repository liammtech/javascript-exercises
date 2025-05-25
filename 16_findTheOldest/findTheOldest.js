const findTheOldest = function(arr) {
    for (item of arr) {
        item.age = (item.yearOfDeath || (new Date().getFullYear())) - item.yearOfBirth;
        console.log(item.yearOfDeath);
    }
    arr.sort((a, b) => a.age - b.age);
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
