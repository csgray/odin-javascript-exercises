const reverseString = function (str) {
    const characters = str.split('');
    const length = str.length;
    let output = "";

    for (i = 0; i < length; i++) {
        output += characters.pop();
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
