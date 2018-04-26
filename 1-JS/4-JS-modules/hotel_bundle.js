(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


// ES module

// export let name = "biryani";
// export let price = 221.00 

//--------------------------------


// let name = "biryani";
// let price = 221.00

// export { name, price }

//-----------------------------------


let mainItem = {
    name: 'Biryani',
    price: 200.00
};

let curd = {
    brand: 'milky mist'
};

let softDrink = {
    brand: 'coke'
};

exports.default = mainItem;
exports.curd = curd;
exports.softDrink = softDrink;
},{}],2:[function(require,module,exports){
"use strict";

var _menu = require("./hotel/menu");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_menu2.default.name + " - " + _menu2.default.price);
//mainItem.price = 0;
// console.log(mainItem.price);

// ES module
//--------------------------------------------
// import { name, price } from './hotel/menu';
// console.log(name);
// console.log(price);
//---------------------------------------------

// import { name as foodName, price as foodPrice } from './hotel/menu';
// console.log(foodName);
// console.log(foodPrice);

//---------------------------------------------

// import * as menu from './hotel/menu';
// console.log(menu.name);
// console.log(menu.price);


//---------------------------------------------

console.log(_menu.curd.brand + " , " + _menu.softDrink.brand);
},{"./hotel/menu":1}]},{},[2]);
