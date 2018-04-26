

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

import mainItem, { curd, softDrink } from './hotel/menu';
console.log(mainItem.name + " - " + mainItem.price);
//mainItem.price = 0;
// console.log(mainItem.price);

console.log(curd.brand + " , " + softDrink.brand);