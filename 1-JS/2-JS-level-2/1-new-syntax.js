"use strict"

//-----------------------------------------------------
// 4. object-lieral-enhancements
//-----------------------------------------------------

// let name = "Nag";
// let age = 33;

// ES5
// let person = {
//     name: name,
//     age: age,
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     address: 'chennai'
// }
// //ES6
// let dynamicField = "office";// home | office | vacation
// let newPerson = {
//     name,
//     age,
//     sayName() {
//         console.log('im ' + this.name);
//     },
//     [dynamicField + "-address"]: 'chennai',
//     [1 + 2]: 'three',
//     ["do Something"]() {
//         console.log('ill do something..');
//     }
// };

//-----------------------------------------------------
// 5. de-structuring
//-----------------------------------------------------

// A. array de-sructuring

// let nums = [10, 20, 30, 40, 50, [60, 70]]

// // let n1 = nums[0];
// // let n2 = nums[1];

// // or

// // let [n1, n2, n3 = 300, , n5, [n6, n7]] = nums;

// let n1;
// let n2;
// [n1, n2] = nums;



// B. Object destructuring

let person = { name: 'Nag', age: 33 }

// let myName=person.name;
// let myAge=person.age;

// or

// let { name: myName, age: myAge } = person;

// let { name: name, age: age } = person;
// or
// let { name, age } = person;

let name;
let age;
({ name, age } = person);


//-----------------------------------------------------
// 5. spread operator
//-----------------------------------------------------

function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// let nums = [10, 20, 30];
// func(nums[0], nums[1], nums[2]);
// or
// func(...nums);


// let a1 = [1, 2, 3]
// let a2 = [7, 8, 9]

// let newArr = [...a1, 4, 5, 6, ...a2];


//-----------------------------------------------------
// 8. symbol type
//-----------------------------------------------------

/*
    ==> unique & immutable value, used as object's identifier property
*/

// how to create symbol ?

// let symbol = Symbol.for('key');

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');


// let e1 = { name: 'A', [javaSymbol]: 'java,spring,hibernate' };
// let e2 = { name: 'B', [jsSymbol]: 'js,react,node.js' };
// let e3 = { name: 'C', [jsSymbol]: 'js' };

// if (e2[jsSymbol]) {
//     console.log('hello js employee,');
//     console.log(e2[jsSymbol]);
// }


// let menu = ["idly", "vada", "poori"];

// // 
// let newMenu = [...menu, "biryani"]
// //
// let [item1, item2, item3, item4] = newMenu;
// //
// for (let item of menu) {
//     console.log(item);
// }
//-----------------------------------------------------------
// 9. custom iterable object
//-----------------------------------------------------

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         };
//     }
// };

// // let [id1, id2] = idMaker;

// // let ids = [...idMaker];

// for (let id of idMaker) {
//     console.log(id);
// }

//-----------------------------------------------------------
// OO with class-syntax
//-----------------------------------------------------------


// Es5

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

// Es6

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         console.log('Person::constructor()');
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
//     sayAge() {
//         console.log('im ' + this.age + "old");
//     }
// }
// // var p1 = new Person('Nag', 33);

// class Employee extends Person {
//     constructor(name, age, salary) {
//         super(name, age);
//         this.salary = salary;
//         console.log('Employee::construtor');
//     }
//     saySalary() {
//         console.log('im ' + this.salary + " only");
//     }
//     askForRaise() {
//         return this.salary * 0.02;
//     }
// }

// // let e = new Employee('Nag', 33, 1000.00);

// class Boss extends Employee {
//     askForRaise() {
//         return this.salary * 0.2 + super.askForRaise();
//     }
// }

// let boss = new Boss('Nag', 33, 1000.00);


// class Abc {
//     static staMethod() {
//         console.log('....');
//     }
// }
// Abc.staVar = 123; // static variable



//-----------------------------------------------------------
// arrow function
//-----------------------------------------------------------


// function-expression

// let getPrice = function () {
//     return 100 + 200;
// }

// arrow-function

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }
// or
// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
// or
// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total;
// }


/*

    where/why we need arrow-function?

    ==> for compact function-argument
    ==> to capture 'this'  ( most important )

*/

// ==> for compact function-argument

// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// // nums.sort(function (a, b) { return a - b; });
// // or
// nums.sort((a, b) => a - b);
// console.log(nums);



// ==> to capture 'this'  ( most important )


/*

 in javascript,
 by default any function statically or dynamically 
 we can bind to other object(s)

*/

// let tnr = {
//     name: 'Nag',
//     doTeach() {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " anwering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " anwering " + q);
//         }
//         console.log('teaching end...');
//         return askQues;
//     }
// }

// let askQues = tnr.doTeach();
// askQues("Q1");
// let newTnr = { name: 'Praveen' }
// askQues.call(newTnr, "Q2")

//-----------------------------------------------------------------


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + ' processed..');
//     }
// };
// invoice.process();

// let invoice = {
//     num: 123,
//     process: () => {
//         console.dir(this);
//         console.log('INV-' + this.num + ' processed..');
//     }
// };
// invoice.process();

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + ' processed partially');
//         let complete = function () {
//             console.log('INV-' + this.num + ' processed completly');
//         }
//         return complete;
//     }
// };

// let complete=invoice.process();
// complete(); 



let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + ' processed partially');
        let complete = () => {
            console.log('INV-' + this.num + ' processed completly');
        }
        return complete;
    }
};

let complete = invoice.process();
complete(); 