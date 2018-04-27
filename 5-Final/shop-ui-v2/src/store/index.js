

import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initialState = {
    products: [],
    reviews: {},
    cart: {}
};
const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

export default store;