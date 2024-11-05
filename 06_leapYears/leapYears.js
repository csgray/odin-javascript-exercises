const leapYears = function (year) {
    return (
        // Leap years are divisible by four
        year % 4 === 0 &&
        // but not 100 unless they are divisible by 400
        (year % 400 === 0 || year % 100 !== 0)
    )
};

// Do not edit below this line
module.exports = leapYears;
