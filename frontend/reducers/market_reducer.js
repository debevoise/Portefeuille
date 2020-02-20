import { RECEIVE_STOCK_INFORMATION, RECEIVE_PORTFOLIO_INFORMATION } from "../actions/market_actions";

const marketReducer = (state = {}, action) => {
    Object.freeze(state);

    let { data } = action;
    let newState;

    switch (action.type) {
        case RECEIVE_STOCK_INFORMATION:
            newState = Object.assign({}, state);
            newState[data.quote.symbol] = data.quote;
            return newState;
        case RECEIVE_PORTFOLIO_INFORMATION:
            let formattedData = {};
            Object.keys(data).forEach(ticker => formattedData[ticker] = data[ticker].quote) 
            newState = Object.assign({}, state, formattedData);
            return newState;
        default:
            return state;
    }
};

export default marketReducer;
