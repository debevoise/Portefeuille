import { combineReducers } from "redux";
import stocksReducer from './stocks_reducer.js';
import transactionsReducer from './transactions_reducer.js';
import userReducer from './user_reducer.js';
import errorsReducer from './errors_reducer.js';

const rootReducer = combineReducers({
    stocks: stocksReducer,
    transactions: transactionsReducer,
    user: userReducer,
    errors: errorsReducer
});

export default rootReducer;