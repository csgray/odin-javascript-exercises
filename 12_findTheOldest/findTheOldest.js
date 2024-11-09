const findTheOldest = function (people) {
    const oldest = people.map(function (person) {
        currentYear = new Date().getFullYear();
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        return {
            name: person.name,
            age: age,
        }
    }).sort((a, b) => b.age - a.age)[0];
    return people.find((person) => person.name === oldest.name)
}

// Do not edit below this line
module.exports = findTheOldest;
