const removeFromArray = function() {
    const args = arguments;
    let arr = args[0];
    for (const arg in args) {
        if (arg === '0') continue;
        arr = arr.filter(i => i !== args[arg]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
