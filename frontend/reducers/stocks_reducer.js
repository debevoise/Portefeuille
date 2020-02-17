import { RECEIVE_USER } from "../actions/user_actions";

const stocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.payload.stocks;
        default:
            return state;
    }
}

export default stocksReducer;