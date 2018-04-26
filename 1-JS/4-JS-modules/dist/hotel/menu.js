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