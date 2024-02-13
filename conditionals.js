/** Use conditionals to check if a condition is true or false - conditionals can control flow of code */
const user = {
    name: "Alexander",
    age: 32,
    likesCoding: true
};

// Use if statement to check if condition is true
if (user.likesCoding) {
    console.log("Alexander likes coding");
} else {
    consloe.log("Alexander doesn't like coding");
}

// Can also write an if statement without else block 
if (user.age >= 18) {
    console.log("Alexander is an adult");
}

// Use if statement to check if a condition is false with not operator (! = NOT OPERATOR)
if (!user.likesCoding) {
    console.log("Alexander doesn't like coding");
} else {
    console.log("Alexander likes coding");
}

// Chain multiple if statements together using else if (&& = AND)
if (user.age < 18) {
    console.log("Alexander is a child");
} else if (user.age >= 18 && user.age <65) {
    console.log("Alexander is an adult")
} else {
    console.log("Alexander is a pensioner");
}

// Use or operator to check if one of two conditions is true (|| = OR)
if (user.age < 18 || user.age >= 65) {
    console.log("Alexander is not an adult");
} else {
    console.log("Alexander is an adult");
}

// Use and operator to check if two conditions are true (&& = AND)
if (user.age >= 18 && user.likesCoding) {
    console.log("Alexander is an adult who likes coding");
} else {
    console.log("Alexander likes coding");
}

// Use ternary operator (shorthand) to write if statement (? and : = TERNARY) condition ? exprIfTrue : exprIfFalse

user.likesCoding ? console.log("Alexander likes coding") :
    console.log("Alexander doesn't like coding");
