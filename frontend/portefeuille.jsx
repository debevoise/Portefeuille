import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { fetchUser, signupUser, loginUser } from './actions/user_actions';
import $ from 'jquery';
import { fetchStockPrice } from './util/market_api_util';
import { fetchStockInformation, fetchMarketInformation } from './actions/market_actions';
import { buyStock } from './actions/transaction_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    
    if (window.currentUser) {
        const loggedInState = {
            user: window.currentUser,
            errors: [] 
        }; 
        
        store = configureStore(loggedInState);
        delete window.currentUser; // Comment out for current user debugging
    } else {
        const defaultState = {
            user: null,
            errors: [] 
        };
        
        store = configureStore(defaultState);
    }
    // <Root store={store} />
    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.user = {
        email: 'foo@bazzz.com',
        password: 'foobar',
        password_confirmation: 'foobar'
    }
    window.buyStock = buyStock;
    window.signupUser = user => dispatch(signupUser(user));
    window.loginUser = user => dispatch(loginUser(user));

    window.$ = $;
    window.fetchStockInformation = fetchStockInformation;
    window.fetchMarketInformation = fetchMarketInformation;

    ReactDOM.render(<Root store={store} />, root);

});
