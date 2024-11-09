const palindromes = function (str) {
    chars = str
        .toLowerCase()
        .split('')
        .filter((char) => /[A-Za-z0-9]/.test(char));
    return chars.join() === chars.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
