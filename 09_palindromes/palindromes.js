const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const chars = string.toLowerCase().split('');
    const filteredChars = chars.filter(char => alphanumerical.includes(char));
    const filteredString = filteredChars.join()
    const reversedString = filteredChars.reverse().join();
    if (filteredString === reversedString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
