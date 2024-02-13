/** For loops have 3 parts - initialisation, condition and increment: 
 * Initialisation runs once at start, condition checked BEFORE each iteration and increment AFTER each iteration */

for(let number = 0; number < 10; number++) {
    console.log(number);
}

// Use the for loop to loop over array, use length property to check number of items in array and use index to access individual items in array

const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.lenght; index++) {
    console.log(numbers[index]);
}

// Use of keyword to write for loop

const countries = ["Australia", "New Zealand", "Japan", "Indonesia"];

for (const country of countries) {
    console.log(country);
}