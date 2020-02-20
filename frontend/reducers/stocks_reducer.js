import { RECEIVE_USER, LOGOUT_USER } from "../actions/user_actions";
import { RECEIVE_RECEIPT, RECEIVE_TRANSACTIONS } from "../actions/transaction_actions";

const stocksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGOUT_USER:
            return {};
        case RECEIVE_USER:
            return action.payload.stocks || state;
        case RECEIVE_RECEIPT:
        case RECEIVE_TRANSACTIONS:
            return action.payload.stocks;
        default:
            return state;
    }
}

export default stocksReducer;