
import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants';

export function loadReviews(productId) {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN' })
        let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: 'REQUEST_FINISED' })
                dispatch({ type: LOAD_REVIEWS, reviews, productId })
            })
    }
}

export function addNewReview(productId, review) {
    return function (dispatch) {
        let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(review => {
                dispatch({ type: ADD_NEW_REVIEW, review, productId })
            })
    }
}