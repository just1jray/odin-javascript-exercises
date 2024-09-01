const sumAll = function(bottom, top) {
    if (bottom < 0 || 
        top < 0 ||
        bottom % 1 != 0 ||
        top % 1 != 0 ||
        typeof bottom === 'string' ||
        typeof top === 'string') {
        return 'ERROR'
    }
    if (bottom > top) {
        let placeholder = bottom;
        bottom = top;
        top = placeholder;
    }
    let total = 0;
    for (let i = bottom; i <= top; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
