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
    return fetch('/api/transactions').then(resp => resp.json()).then(
        payload => dispatch(receiveUser(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}