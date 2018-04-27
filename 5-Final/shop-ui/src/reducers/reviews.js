


import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants';

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_REVIEWS: {
            let reviews = action.reviews;
            let productId = action.productId
            return Object.assign({}, state, { [productId]: [...reviews] })
        }
        case ADD_NEW_REVIEW: {
            let review = action.review;
            let productId = action.productId
            return Object.assign({}, state, { [productId]: [...state[productId], review] })
        }
        default:
            return state;
    }
}