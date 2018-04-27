
import { BUY } from '../constants';

export function cartReducer(state = {}, action) {
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
