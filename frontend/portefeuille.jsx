import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store = configureStore();
    window.store = store;

    if (window.currentUser) {
        const loggedInState = {
            user: window.currentUser,
            errors: { session: [] }
        }; 

        // store = configureStore(loggedInState);
        delete window.currentUser; // Comment out for current user debugging
    } else {
        const defaultState = {
            user: null,
            errors: { session: [] }
        };

        // store = configureStore(defaultState);
    }
    // <Root store={store} />

    ReactDOM.render(<Root store={store} />, root);
});
