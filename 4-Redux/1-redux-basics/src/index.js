console.log('-index.js');
import { combineReducers, createStore } from 'redux';

//------------------------------------------------
// Action(s)
const INCREMENT = "incrememnt";
const DECREMENT = "decrement";
const BUY = "buy";
//------------------------------------------------
// Action creator(s)
function incrememnt(value) {
    return { type: INCREMENT, value };
}
function decrement(value) {
    return { type: DECREMENT, value };
}
function buy(item, qty) {
    return { type: BUY, item, qty };
}
//------------------------------------------------

// Reducer(s)

function counterReducer(state = { count: 0 }, action) {
    console.log('counter reducer');
    switch (action.type) {
        case INCREMENT:
        case BUY:
            return Object.assign({}, state, { count: state.count + (action.value ? action.value : 1) });
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value });
        default:
            return state;
    }
}
function cartReducer(state = {}, action) {
    console.log('cartReducer');
    switch (action.type) {
        case BUY: {
            let code = action.item.code;
            let itemLine = state[code];
            if (itemLine) {
                itemLine = { [code]: { item: itemLine.item, qty: itemLine.qty + action.qty } }
            } else {
                itemLine = { [code]: { item: action.item, qty: 1 } }
            }
            return Object.assign({}, state, itemLine)
        };
        default:
            return state;
    }
}
//------------------------------------------------
const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer
});
//------------------------------------------------

// store
let initialState = {
    counter: { count: 100 },
    cart: {
        "111":
            {
                item: { name: 'Laptop', price: 1000, descriptn: 'New mac pro' },
                qty: 1
            }
    }
};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//------------------------------------------------


// View ( plain - js )
let totalCountSpan = document.getElementById('totalCountSpan')

let state = store.getState();
totalCountSpan.innerText = state.counter.count;

store.subscribe(() => {
    console.log('view subcribing state changes..');
    let state = store.getState();
    totalCountSpan.innerText = state.counter.count;
});

let incBtn = document.getElementById('incBtn');
incBtn.addEventListener('click', () => {
    store.dispatch(incrememnt(10));
});
let decBtn = document.getElementById('decBtn');
decBtn.addEventListener('click', () => {
    store.dispatch(decrement(10));
});


let lapBtn = document.getElementById('lapBtn');
let mobBtn = document.getElementById('mobBtn');
lapBtn.addEventListener('click', () => {
    console.log('buying laptop');
    let item = { code: '111', name: 'Laptop', price: 1000, descriptn: 'New mac pro' }
    store.dispatch(buy(item, 5));
});
mobBtn.addEventListener('click', () => {
    let item = { code: '222', name: 'Mobile', price: 1000, descriptn: 'New  pro' }
    store.dispatch(buy(item, 5));
});
