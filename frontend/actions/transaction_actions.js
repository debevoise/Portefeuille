import { receiveErrors } from "./error_actions";

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

export const receiveTransactions = payload => ({
    type: RECEIVE_TRANSACTIONS,
    payload
})

export const receiveTransaction = payload => ({
    type: RECEIVE_TRANSACTION,
    payload
})

export const fetchTransactions = () => dispatch => {
    return $.ajax({ url: '/api/transactions' }).then(
        payload => dispatch(receiveTransactions(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}