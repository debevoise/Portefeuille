import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
          <main>
            POOOPP
            <Switch>
              <Route exact path="/transactions" component={Stocks} />
              <Route exact path="/stocks" component={Stocks} />
              <Redirect from="/" to="/stocks" />
            </Switch>
          </main>
        );
    }
}