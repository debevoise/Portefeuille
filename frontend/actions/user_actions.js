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
    return fetch('/api/user').then(resp => resp.json()).then(
        payload => dispatch(receiveUser(payload)),
        errors => dispatch(receiveErrors(errors))
    )
}

export const logoutUser = () => dispatch => {
    return fetch("api/logout", {
      method: "delete"
    }).then(() => dispatch(logout()));
}

export const loginUser = () => dispatch => {
  return fetch("api/login", {
    method: "post"
  }).then(resp => resp.json())
    .then(user => dispatch(receiveUser(user)))
    .catch(errors => receiveErrors(errors));
};

export const signupUser = (user) => dispatch => {
  return fetch("/users", {
    method: "post",
    body: {
        user
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(resp => resp.json())
    .then(user => dispatch(receiveUser(user)))
    .catch(errors => receiveErrors(errors));
};

export const signupAjax = user => {
    return $.ajax({ url: 'api/transactions' })
}

