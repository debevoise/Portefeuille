import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { fetchUser, signupUser } from './actions/user_actions';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    
    if (window.currentUser) {
        const loggedInState = {
            user: window.currentUser,
            errors: { session: [] }
        }; 
        
        store = configureStore(loggedInState);
        delete window.currentUser; // Comment out for current user debugging
    } else {
        const defaultState = {
            user: null,
            errors: { session: [] }
        };
        
        store = configureStore(defaultState);
    }
    // <Root store={store} />
    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.user = {
        email: 'foo@bar.com',
        password: 'foobar',
        password_confirmation: 'foobar'
    }
    window.signupUser = user => dispatch(signupUser(user));
    window.fetchUser = fetchUser;
    window.$ = $;


    ReactDOM.render(<Root store={store} />, root);

});
