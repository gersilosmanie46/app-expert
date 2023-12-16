Filename: complex_code.js

```
/*
* Filename: complex_code.js
* Description: Demonstration of a complex JavaScript code
* Author: Your Name
* Date: YYYY-MM-DD
*/

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// An array of Persons
const people = [
  new Person("John", 25),
  new Person("Emily", 28),
  new Person("David", 31),
];

// Function to find the average age of people
function calculateAverageAge(peopleArr) {
  let sum = 0;
  for (let person of peopleArr) {
    sum += person.age;
  }
  return sum / peopleArr.length;
}

// Logging the average age
console.log("Average age:", calculateAverageAge(people));

// Function to determine if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Logging prime numbers between 1 and 100
console.log("Prime numbers between 1 and 100:");
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Class definition for a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Creating a rectangle object
const rectangle = new Rectangle(5, 10);

// Logging the area and perimeter of the rectangle
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());

// Function to find the factorial of a number recursively
function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}

// Logging factorial of numbers between 1 and 10
console.log("Factorials of numbers between 1 and 10:");
for (let i = 1; i <= 10; i++) {
  console.log(`Factorial of ${i}:`, factorial(i));
}

// Complex logic using multiple functions and conditions
const complexVariable = "hello";

function complexFunction() {
  if (complexVariable === "hello") {
    console.log("Complex function executed successfully.");
  } else {
    console.log("Complex function failed.");
  }
}

complexFunction();

// ...

// More complex and creative code can continue here

// ...

```