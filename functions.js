// This is a function declaration
function sayHello() {
    console.log("Hello!");
};

// This is a function call
sayHello();

// This is a function declaration with a parameter
function sayHelloTo(name) {
    console.log(`Hello ${name}!`);
};

// This is a function call with argument
sayHelloTo("Alexander");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
};

const result = addTwoNumbers(1, 2);
console.log(result);

/**Two ways to create functions in JS - declaration and expression (assign function to variable and call using variable name) */

// This is a function expression
const sayGoodbye = function() {
    console.log("Bye");
};

// This a function call
sayGoodbye();

/** Aarow fuctions are a newer way of writing functions in JS - more concise, easier to read => */

// This is an arrow function
const sayGreeting = () => {
    console.log("Welcome to She Codes");
};

// This is a function call
sayGreeting();

// This is an arrow function with parameters
const addNumbers = (num1, num2) => {
    return num1 + num2;
};

// This is a function call
const result = addNumbers(1, 2);

console.log(result);

/** You can pass functions as arguments as well as return functions from other functions */

const add = (num1, num2) => {
    return num1 + num2;
};

const doSomeMath = (num1, num2, mathFunction) => {
    return mathFunction(num1, num2);
};

const result = doSomeMath(1, 2, add);

console.log(result);

const multiply = (num1, num2) => {
    return num1 * num2;
};

const doSomeMoreMath = (num1, num2, mathFunction) => {
    return mathFunction(num1, num2);
};

const result = doSomeMoreMath(1, 2, multiply);

console.log(result);
