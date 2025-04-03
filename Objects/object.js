// Object representing the first person
const person1 = {
    Firstname: "Sumedh",  // First name of person1
    Lastname: "Patil",     // Last name of person1
    age: 20,              // Age of person1
    isEmployed: true,     // Employment status of person1

    // Method for person1 to describe their action
    going: function () {
        console.log("Hey there! I'm Sumedh, and I'm heading out for an adventure!");
    },
}

// Object representing the second person
const person2 = {
    Firstname: "Mandar",  // First name of person2
    Lastname: "Vade",     // Last name of person2
    age: 13,             // Age of person2
    isEmployed: false,   // Employment status of person2

    // Method for person2 to describe their action
    eat: function () {
        console.log("Hey there! I'm Mandar, and I'm enjoying a tasty meal!");
    },
}

// Display details of person1
console.log(person1.Firstname);
console.log(person1.Lastname);
console.log(person1.age);
console.log(person1.isEmployed);
person1.going();  // Calling the going method

// Display details of person2
console.log(person2.Firstname);
console.log(person2.Lastname);
console.log(person2.age);
console.log(person2.isEmployed);
person2.eat();  // Calling the eat method
