// Defining an object
const person = {
    name: "Alexander",
    age: 32,
    likesCoding: true,
    address: {
        street: "123 Fake Street",
        suburb: "Fakeville",
        postcode: 1234
    }
};

// consloe.log is a function that prints the value inside the brackets to the terminal, like Python's print().
console.log(person["name"]); 

console.log(person.age);

console.log(person.address.street);

console.log(person["address"]["suburb"]);

// We can add values to an object using dot notation or square brackets
person.address.state = "NSW";

person["address"]["country"] = "Australia";

console.log(person.address);