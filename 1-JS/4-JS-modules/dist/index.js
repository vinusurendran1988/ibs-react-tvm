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