

let n = 12;
n++; // mutable
let p = n + 10;   // immutable 


let arr = [1, 2];
// arr.push(3); // mutable
let newArr = arr.concat(3); // immutable


let person = { name: 'Nag', age: 33 }
// person.age = 34; // mutable
let newPerson = Object.assign({}, person, { age: 34 }); // immutable