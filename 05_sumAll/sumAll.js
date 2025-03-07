const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    let startInt = 0;
    let endInt = 0;

    if (firstInt < 0 || secondInt < 0) {
        return 'ERROR';
    }

    if (typeof(firstInt) !== 'number' || typeof(secondInt) !== 'number') {
        return 'ERROR';
    }

    if (firstInt < secondInt) {
        startInt = firstInt;
        endInt = secondInt;
    } else {
        startInt = secondInt;
        endInt = firstInt;
    }

    for (let i = startInt; i <= endInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
