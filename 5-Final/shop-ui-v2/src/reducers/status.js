

export function statusReducer(state = {}, action) {
    switch (action.type) {
        case "REQUEST_BEGIN": {
            return Object.assign({}, state, { message: 'pls wait..' })
        }
        case "REQUEST_FINISED": {
            return Object.assign({}, state, { message: '' })
        }
        default:
            return state;
    }
}