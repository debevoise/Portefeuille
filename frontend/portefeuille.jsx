import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { fetchUser } from './actions/user_actions';

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

    window.fetchUser = fetchUser;

    if (store.getState().user) {
        ReactDOM.render(<Root store={store} />, root);
    }
});
