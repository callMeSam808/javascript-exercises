const findTheOldest = function(people) {
    let oldestPerson = people[0];
    
    people.forEach(person => {
        if (!person.yearOfDeath) {
            let currentDate = new Date();
            person.yearOfDeath = currentDate.getFullYear();
        }
        let currentAge = person.yearOfDeath - person.yearOfBirth;
        let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        if (oldestAge < currentAge) 
            oldestPerson = person;
        });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
