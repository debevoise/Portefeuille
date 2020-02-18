import { LOGOUT_USER } from "../actions/user_actions";

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}

export default transactionsReducer;