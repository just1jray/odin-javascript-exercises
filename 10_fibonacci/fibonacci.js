const fibonacci = function(num) {
    if (+num === 0) return 0;
    if (+num === 1) return 1;
    if (+num < 0) return "OOPS";
    return Array(+num - 2)
        .fill(0)
        .reduce(([a, b]) => [b, a + b], [1, 1])[1];
};

// Do not edit below this line
module.exports = fibonacci;
