// JavaScript Assignment - Variables and Loops

console.log("=== PART 1: Variable Declarations ===\n");

var myName = "Claude";
console.log("1. Name (var):", myName);

let myAge = "25";
console.log("2. Age (let, as string):", myAge, "- Type:", typeof myAge);

const PI = 3.1416;
console.log("3. PI constant:", PI);

try {
    PI = 3.14159;
} catch (error) {
    console.log("   Error when trying to reassign PI:", error.message);
}

let isStudent = parseInt(myAge) < 25;
console.log("4. Is Student (age < 25):", isStudent);

const person = {
    name: "Claude",
    age: 25,
    address: {
        street: "123 AI Street",
        city: "Digital City",
        country: "Virtual World"
    },
    hobbies: ["coding", "learning", "helping users"],
    contact: {
        email: "claude@anthropic.com",
        phone: "555-AI-HELP"
    }
};
console.log("5. Person object:", person);

const colors = ["red", "blue", "green", "yellow", "purple", "blue", "orange", "red"];
console.log("6. Colors array:", colors);

console.log("\n=== PART 2: Loop Challenges ===\n");

console.log("Challenge 1: Reverse and Transform");
const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Original words:", words);

const reversedUpperWords = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
    }
    reversedUpperWords.push(reversedWord.toUpperCase());
}

console.log("Reversed and uppercase words:", reversedUpperWords);

console.log("\nChallenge 2: Filtering and Counting");
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
console.log("Original numbers:", numbers);

let evenGreaterThan20 = [];
let count = 0;

for (let number of numbers) {
    if (number % 2 === 0 && number > 20) {
        evenGreaterThan20.push(number);
        count++;
    }
}

console.log(`Found ${count} numbers: [${evenGreaterThan20.join(', ')}]`);

console.log("\n=== Assignment Complete ===");
console.log("All requirements have been demonstrated successfully!");

console.log("\n=== Bonus: Array Analysis ===");
console.log("Colors array length:", colors.length);
console.log("Unique colors:", [...new Set(colors)]);
console.log("Person's hobbies count:", person.hobbies.length);