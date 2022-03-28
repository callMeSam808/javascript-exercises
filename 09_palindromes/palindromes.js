const palindromes = function (string) {
    let noPuncStr = string.replace(/\W/g, "");
    let splitString = noPuncStr.split('');
    let reverseString = '';
    for (let i = splitString.length - 1; i >= 0; i--) {
        reverseString += splitString[i];
    }
    return reverseString.toUpperCase() === noPuncStr.toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
