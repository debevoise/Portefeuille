import { LOGOUT_USER } from "../actions/user_actions";
import { RECEIVE_TRANSACTIONS, RECEIVE_RECEIPT } from "../actions/transaction_actions";

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            return action.payload.transactions;
        case RECEIVE_RECEIPT:
            let {transaction} = action.payload;
            nextState[transaction.id] = transaction;
            return nextState;            
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}

export default transactionsReducer;