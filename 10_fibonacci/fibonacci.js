const fibonacci = function (index) {
    if (index < 0) return "OOPS";

    const numbers = [0, 1];
    for (i = 2; i <= index; i++) {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
    }
    return numbers[index];
};

// Do not edit below this line
module.exports = fibonacci;
