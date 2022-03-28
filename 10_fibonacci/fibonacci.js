const fibonacci = function(num) {
    let fib = [1, 1];
    if (num < 0) {
        return 'OOPS';
    }
    if (num == 1) {
        return fib[0];
    }
    if (num == 2) {
        return fib[1];
    }
    for (let i = 1; i < num - 1; i++) {
        let result = fib[i-1] + fib[i];
        fib.push(result);
    }
    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
