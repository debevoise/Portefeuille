import { receiveErrors } from "./error_actions";

export const RECEIVE_RECEIPT = 'RECEIVE_RECEIPT';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

export const receiveTransactions = payload => ({
    type: RECEIVE_TRANSACTIONS,
    payload
})

export const receiveReceipt = payload => ({
    type: RECEIVE_RECEIPT,
    payload
})

export const fetchTransactions = () => dispatch => {
    return $.ajax({ url: '/api/transactions' }).then(
        payload => dispatch(receiveTransactions(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}

export const buyStock = (ticker, company, unit_price, quantity) => dispatch => {
    let transaction = { ticker, company, unit_price, quantity };
    return $.ajax({ 
        url: 'api/stocks/buy', 
        method: 'post', 
        data: { transaction }
    }).then(
        payload => dispatch(receiveReceipt(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}