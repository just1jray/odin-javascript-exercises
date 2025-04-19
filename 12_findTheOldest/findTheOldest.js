const findTheOldest = function(people) {
    return people.sort((a, b) => {
        if (!a.yearOfDeath) { a.yearOfDeath = new Date().getFullYear()};
        if (!b.yearOfDeath) { b.yearOfDeath = new Date().getFullYear()};
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
