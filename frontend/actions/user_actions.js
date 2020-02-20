import { receiveErrors } from "./error_actions";

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveUser = payload => ({
    type: RECEIVE_USER, 
    payload
})

export const logout = () => ({
    type: LOGOUT_USER
})

export const fetchUser = () => dispatch => {
    return $.ajax({ url: '/api/user'}).then(
        payload => dispatch(receiveUser(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}

export const logoutUser = () => dispatch => {
    return $.ajax({ 
        url: "/users/sign_out",
        method: "delete"
    }).then(() => dispatch(logout()));
}

export const loginUser = user => dispatch => {
    return $.ajax({ 
        url: '/users/sign_in', 
        method: 'post', 
        data: { user }
    }).then(
        payload => dispatch(receiveUser(payload)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
};

export const signupUser = user => dispatch => {
    return $.ajax({ 
        url: '/users', 
        method: 'post', 
        data: { user }
    }).then(
        payload => dispatch(receiveUser(payload)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
};



