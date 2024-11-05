const repeatString = function (str, count) {
    if (count < 0) { return "ERROR" };

    let output = "";

    for (i = 0; i < count; i++) {
        output += str;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
