const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((num) => {
        if (!args.includes(num)) {
            newArray.push(num);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
