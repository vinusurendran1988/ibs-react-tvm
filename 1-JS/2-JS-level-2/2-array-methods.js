

// let products = [
//     { id: 1, name: 'Product-1', price: 100 },
//     { id: 2, name: 'Product-2', price: 200 },
//     { id: 3, name: 'Product-3', price: 300 },
//     { id: 4, name: 'Product-4', price: 400 },
// ];

//-----------------------------------------------------
//let newItem = { id: 5, name: 'Product-5', price: 500 }
// products.push(newItem); // mutatable
//let newProducts = products.concat(newItem); // immutable

// e.g
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// or
// let c = [...a, ...b];
//-----------------------------------------------------
// products.pop();
//-----------------------------------------------------
// let sub = products.slice(1, 3);
//-----------------------------------------------------
// delete products[1];
// products.splice(1, 1);
// products.splice(1, 1, { id: 11, name: 'Product-11', price: 1100 }, { id: 111, name: 'Product-111', price: 11100 });
//-----------------------------------------------------
// products.forEach((item, idx) => {
//     console.log(idx);
//     console.log(item)
// });
//-----------------------------------------------------
// let filteredProducts = products.filter((item) => {
//     if (item.price < 300) return true; else return false
// });
//-----------------------------------------------------
// let productDet = products.map((item, idx) => {
//     return item.name;
// });
//-----------------------------------------------------

// reduce-pattern

// let total = products.reduce((acc, item) => {
//     console.log(acc);
//     console.log(item);
//     return item.price + acc;
// }, 0);
// console.log(total);

//-----------------------------------------------------

// let b1 = products.every(item => item.price < 300);
// let b2 = products.some(item => item.price < 300);

//-----------------------------------------------------

// let idx = products.findIndex(item => item.price === 300);
// console.log(idx);

// let item = products.find(item => item.price === 300);
// console.log(item);

//-----------------------------------------------------

// Ex. Todo app


//-----------------------------------------------------