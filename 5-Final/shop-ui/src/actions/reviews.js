
import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants';

export function loadReviews(productId) {
    //..
    let reviews = [
        { stars: 5, author: 'who@email.com', body: 'sample review' }
    ];
    return { type: LOAD_REVIEWS, reviews, productId };
}

export function addNewReview(productId, review) {
    //..
    return { type: ADD_NEW_REVIEW, review, productId };
}