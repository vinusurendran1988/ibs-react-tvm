

// #1 without prototypes

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im ' + this.name);
//     }
//     this.sayAge = function () {
//         console.log('im ' + this.age + " old");
//     }
// }

// #2 with prototype

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// let p1 = new Person('Nag', 33);
// let p2 = new Person('Ria', 3);

//-------------------------------------------------------


// let p = { x: 10, y: 20 };
// let c = Object.create(p);

//-------------------------------------------------------

// let p = { x: 10, y: 20 }
// let q = { z: 30 };

// Object.setPrototypeOf(q, p);

//-------------------------------------------------------
