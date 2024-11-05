function isNegative(num) {
    return num < 0;
}

function isNotInteger(num) {
    return (num % 1) !== 0;
}

function isNotNumberType(num) {
    return (typeof num) !== "number";
}

const sumAll = function (first, second) {
    if (
        isNegative(first) || isNegative(second) ||
        isNotInteger(first) || isNotInteger(second) ||
        isNotNumberType(first) || isNotNumberType(second)
    ) return "ERROR";

    if (first > second) {
        // Swaps values with array destructuring
        [first, second] = [second, first]
    }

    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
