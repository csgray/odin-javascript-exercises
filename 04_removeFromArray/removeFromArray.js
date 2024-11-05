const removeFromArray = function (items, ...args) {
    for (const arg of args) {
        // Returns an array of items that do not match the argument
        items = items.filter((item) => item !== arg)
    }

    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
