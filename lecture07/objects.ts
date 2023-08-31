// Objects

let teacher = {
    name: "Zeeshan",
    experience: "10"
}

console.log(teacher.name);
console.log(teacher["experience"]);


// Type Declaration

let student : {
    name: string,
    age: number
}

student = {
    name: "Muhammad Kamran",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

// Example 3
function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

// example 4
function greet1(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

// example 5

// or they can be named by using either an interface:

interface Person {
  name: string;
  age: number;
}
 
function greet2(person: Person) {
  return "Hello " + person.name;
}

