
import { LOAD_PRODUCTS } from '../constants';

// sync Action

// export function loadProducts() {
//     //...
//     let products = [
//         {
//             id: "lap111",
//             code: '111',
//             name: 'Laptop',
//             price: 198000,
//             description: 'New Mac pro',
//             canBuy: true,
//             image: 'images/Laptop.png'
//         },
//         {
//             id: 'mob222',
//             code: '222',
//             name: 'Mobile',
//             price: 18000,
//             description: 'New pro',
//             canBuy: true,
//             image: 'images/Mobile.png'
//         }
//     ]
//     return { type: LOAD_PRODUCTS, products }
// }


//----------------------------------------------

// Async Action


export function loadProducts() {
    return function (dispatch) {
        let apiUrl = "http://localhost:8080/api/products";
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products })
            })
    }
}