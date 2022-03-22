const reverseString = function(string) {
    const strArray = string.split("");
    let result = strArray.reverse().join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
