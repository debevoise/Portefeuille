import { receiveErrors } from "./error_actions";

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = payload => ({
    type: RECEIVE_USER, 
    payload
})

export const fetchUser = () => dispatch => {
    return fetch('/api/user').then(resp => resp.json()).then(
        payload => dispatch(receiveUser(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}