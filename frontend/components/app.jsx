import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Transactions from './transactions/transactions';
import Stocks from './stocks/stocks';
import Header from './header/header'
import { connect } from 'react-redux';
import LoginForm from './session/login';
import SignupForm from './session/signup';
import Splash from './welcome/splash';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Footer from './header/footer';

class App extends React.Component {
    
    render() {
        if (!this.props.loggedIn) {
            return (
                <Switch>
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="/signup" component={SignupContainer} />
                    <Route exact path="/" component={Splash} />
                    <Redirect from="/" to="/" />
                </Switch>
            );
        }

        return (
            <main className='main-view'>
                <Header />
                <Switch>
                    <Route exact path="/transactions" component={Transactions} />
                    <Route exact path="/stocks" component={Stocks} />
                    <Redirect from="/" to="/stocks" />
                </Switch>
                <Footer />
            </main>
        );
    }
}

const msp = (state) => {
    const loggedIn = !!state.user;
    return { loggedIn };
}

export default connect(msp)(App);