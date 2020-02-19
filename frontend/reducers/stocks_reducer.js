import { RECEIVE_USER, LOGOUT_USER } from "../actions/user_actions";

const stocksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGOUT_USER:
            return {};
        case RECEIVE_USER:
            return action.payload.stocks || state;
        default:
            return state;
    }
}

export default stocksReducer;