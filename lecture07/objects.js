"use strict";
// Objects
Object.defineProperty(exports, "__esModule", { value: true });
let teacher = {
    name: "Zeeshan",
    experience: "10"
};
console.log(teacher.name);
console.log(teacher["experience"]);
// Type Declaration
let student;
student = {
    name: "Muhammad Kamran",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
// Example 3
function greet(person) {
    return "Hello " + person.name;
}
// example 4
function greet1(person) {
    return "Hello " + person.name;
}
function greet2(person) {
    return "Hello " + person.name;
}
