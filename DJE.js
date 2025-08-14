// Simplified JavaScript Assignment

// Variables
var myName = "Claude";
let myAge = 25;
const PI = 3.14;
let isStudent = myAge < 25;

const person = {
    name: myName,
    age: myAge,
    hobbies: ["coding", "learning"]
};

const colors = ["red", "blue", "green", "yellow", "blue", "red"];

// Loops
const words = ["apple", "banana", "cherry"];
const reversedUpperWords = words.map(w => w.split('').reverse().join('').toUpperCase());

const numbers = [12, 45, 67, 23, 90, 32];
const evenGreaterThan20 = numbers.filter(n => n % 2 === 0 && n > 20);

// Output
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("PI:", PI);
console.log("Is Student:", isStudent);
console.log("Person:", person);
console.log("Colors:", colors);

console.log("Reversed & Uppercase Words:", reversedUpperWords);
console.log("Even Numbers > 20:", evenGreaterThan20);

console.log("Colors Length:", colors.length);
console.log("Unique Colors:", [...new Set(colors)]);
console.log("Hobbies Count:", person.hobbies.length);