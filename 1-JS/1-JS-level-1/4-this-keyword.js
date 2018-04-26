"use strict"

/*
    'this'  ==> current context/scope's owner
*/


// why we 'this'  keyword ?

// let pName = "Global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         //let pName = "Local";
//         console.log('im ' + pName); // context/scope's hierarchy data
//         console.log('im ' + person.pName) // obj's data
//         console.log('im ' + this.pName); // current context's owner data
//     }
// }
// // person.sayName();
// let oldPerson = person;
// person = {
//     pName: 'Ria',
//     sayName: function () {
//         console.log('im ' + person.pName);
//     }
// }
// oldPerson.sayName();

//-----------------------------------------------------------

// Function-binding

/*
    1. static
    2. dynamic
*/

//-----------------------------------------------------------
// static function-binding
//-----------------------------------------------------------

// let p1={
//     name:'Nag',
//     sayName:function(){console.log('im '+this.name)}
// };
// let p2={
//     name:'Ria',
//     sayName:function(){console.log('im '+this.name)}
// };

// or

// function sayNameForAll() {
//     console.dir(this);
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll }
// let p2 = { name: 'Ria', sayName: sayNameForAll }

// sayNameForAll(); // im ??  // Error ( in strict-mode)
// p1.sayName(); // im Nag
// p2.sayName(); // im RIa


//----------------------------------------------------------
// dynamic function-binding
//-----------------------------------------------------------

// let greetLib = {
//     name: 'greet-lib',
//     sayName: function (message, from) {
//         console.log(message + ' im ' + this.name + " : " + from);
//     }
// };


// let p = { name: 'Nag' };
// let e = { name: 'IBM' };

// way-1: call()
// greetLib.sayName.call(p, "Hello", "chennai")
// greetLib.sayName.call(e, "Hey", 'universe');

// way-2: apply()
// greetLib.sayName.apply(p, ["Hello", "chennai"])
// greetLib.sayName.apply(e, ["Hey", 'universe']);

// way-3 : bind()
// let personSayNameFunc = greetLib.sayName.bind(p, "hello", "chennai");
// personSayNameFunc();
// let empSayNameFunc = greetLib.sayName.bind(e);
// empSayNameFunc("hey", "bengalore");
// empSayNameFunc("dude", "chennai");

//--------------------------------------------------------

// class / constructor
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

// let p1 = new Person("Nag", 33)
// let p2 = new Person("Ria", 3)

//--------------------------------------------------------------------------------

// summary

/*

    in .js-lang , we can invoke function in 4 ways

    1. function-invocation ( this ==> global-obj ( if non-strict-mode) else undefined)
    2. method or static-function-binding invocation ( this ==> invoker-obj )
    3. call/apply/bind or dynamic-finction-binding  ( this ==> arg-obj )
    4. constructor invocation ( this ==> new-obj )

*/

//--------------------------------------------------------------------------------

// Q

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p=new Person('Nag', 33);  // dont invoke constructor without 'new' keyword


//--------------------------------------------------------------------------------


// Q2
// let emp = { name: 'IBM' };
// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let self=this;
//         let learn = function () {
//             console.log(this.name + " learning .js from Tnr-" + self.name);
//         }
//         //learn();
//         console.log('teaching end..');
//         return learn;
//     }
// };

// let learn = tnr.doTeach();
// learn.call(emp);
// let newTnr = { name: 'Praveen' }
// let newLearn = tnr.doTeach.call(newTnr);
// newLearn.call(emp);

//------------------------------------------------------------

// Ex.

// create Employee class  with 'name' property

// create Trainer class with 'name' & doTeach property

// instantiate 1 trainer & 2 employees

// ask trainer doTeach & return doLearn function

// execute doLearn function by 2 employees

// imp-note : doLearn shud log like "e.name learning .js from tnr.name"

//-------------------------------------------------

// Q

// let i = 10;
// function func() {
//     console.log(i);
//     console.log(this.i);
// }
// let o = { i: 20 }
// func.call(o);

//-------------------------------------------------

// let i = 10;
// let foo = {
//     bar: {
//         i: 20,
//         baz: function () {
//             console.log(this.i);
//         }
//     }
// }

// let f=foo.bar.baz;
// f();

// /---------------------------------------------------------

// Model
let tnr = { name: 'Nag' };
// Service
let ibmTngService = {
    doTng: function () {
        console.log(this.name + " teaching .js");
    }
};
let tngBtn = document.getElementById('tngBtn');

// let f = function () {
//     ibmTngService.doTng.call(tnr);
// }
// tngBtn.addEventListener('click', f);
// or
tngBtn.addEventListener('click', ibmTngService.doTng.bind(tnr));
