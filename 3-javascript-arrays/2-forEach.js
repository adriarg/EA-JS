import { students } from "./0-data.js";

// Non-Functional Approach
for(let i = 0; i < students.length; i++) {
  console.log(students[i])
}

// Functional Approach
students.forEach(function (student, index, students) {
  console.log(student, index, students)
})

// Functional Approach with Arrow Function
// Immutability - Data should not be changed; use copies instead.

const fullnames = [];

students.forEach((student) => { // concatena el nom i el cognom dels estudiants
  fullnames.push(student.name + " " + student.lastname); // push añade un elemento al final del array
});

console.log(fullnames);
