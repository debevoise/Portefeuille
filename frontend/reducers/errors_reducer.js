import { RECEIVE_ERRORS } from "../actions/error_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_TRANSACTIONS, RECEIVE_RECEIPT } from "../actions/transaction_actions";
import { RECEIVE_STOCK_INFORMATION } from "../actions/market_actions";

const errorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_USER:
        case RECEIVE_TRANSACTIONS:
        case RECEIVE_RECEIPT:
        case RECEIVE_STOCK_INFORMATION:
            return [];
        default:
            return state;
    }
}

export default errorsReducer;