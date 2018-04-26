
/*

    2 types
    --------

    1. simple / primitives ==> values

        a.  undefined
        b.  string
        c.  number
        d.  boolean
        

    2. complex / reference ==> objects

*/

//-----------------------------------------------------------------
// 1. simple / primitives ==> values
//-----------------------------------------------------------------
// a. undefined

var v;

//-----------------------------------------------------------------

// b. string
var name = "Nag";
var selection = 'abc';
// var dynamicString = "the value is " + (12 + 13);
// string interpolation ( ES6 )
var dynamicString = `the value is ${12 + 13} , ...`;
var multiLineString = `
item1
item2
`;

//-----------------------------------------------------------------
// 3. number

var count = 12;
var cost = 12.12;

//-----------------------------------------------------------------

// 4. boolean

var found = true;

// imp-note :

/*
    falsy values:
    => false,0,"",null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/


//-----------------------------------------------------------------
// 2. complex / reference ==> objects
//-----------------------------------------------------------------

/*

    how to create object in .js-language ?

    syntax:

    var ref=new Constructor();

    imp-note:

    by default , 
    all .js-objects are 'extensible' & 'configurable'

*/

// var person = new Object();
// person.name = "Nag";
// person.age = 33;
// person.sayName = function () {
//     console.log('im ' + this.name);
// }
// delete person.age;

//-----------------------------------------------------------------
// literal-style objects
//-----------------------------------------------------------------
// #1  Object

var config = new Object();
config.url = "http://"
config.httpMethod = "GET"
config.success = function () { }

// or

var newConfig = {
    url: "http://",
    httpMethod: "GET",
    success: function () {
        //
    }
};
//-----------------------------------------------------------------

// #2 Array

var items = new Array();
items.push("Item1");
items[1] = "Items2";

// or 

var newItems = ["items1", "items2"];


//-----------------------------------------------------------------

// #3 RegExp

var re = new RegExp("\\d{4}-\\d{4}-\\d{4}");

// or

var newRe = /\d{4}-\d{4}-\d{4}/;


//-----------------------------------------------------------------


// #4 Function

// var add=new Function("n1","n2","var result=n1+n2;return result;");

// or

// function add(n1,n2){
//     var result=n1+n2
//     return result
// }


//-----------------------------------------------------------------


// Quiz

// function getFood(){
//     return{
//         name:'Biryani'
//     }
// }

// var food=getFood();
// console.log(food.name);


//-----------------------------------------------------------------


// how to access obj's properties ?

/*

    way 1: ' . ' notation , use if property is valid identifier
    else
    way 2: ' [] ' notation

*/

var person = {
    name: 'Nag',
    age: 33,
    'home-address': 'chennai'
};

// person.name = "Nag N"
// console.log(person.name); // get

person['home-address'] = "bengalore";
