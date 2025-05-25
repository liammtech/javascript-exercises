const palindromes = function (str) {
    arr = str
        .toLowerCase()
        .split('')
        .filter(char => /[a-z0-9]/.test(char));
    
    //console.log(`arr: ${arr} ${typeof arr}`)

    revArr = [...arr].reverse()
    //console.log(`arr after revArr: ${arr} ${typeof arr}`)
    //console.log(`revArr: ${revArr} ${typeof revArr}`)

    forwardStr = arr.join('');
    //console.log(`forwardStr: ${forwardStr} ${typeof forwardStr}`)

    revStr = revArr.join('');
    //console.log(`revStr: ${revStr} ${typeof revStr}`)

    return forwardStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
