import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logoutUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

const Header = ({logout}) => {
    
    return (
      <header className="header">
        <div className="logo">Portefeuille</div>
        <div className="nav">
          <NavLink className="navlink" to="/stocks">
            Stocks
          </NavLink>
          <NavLink className="navlink" to="/transactions">
            Transactions
          </NavLink>
          <button className="navlink" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
    );
}

const msp = () => ({});
const mdp = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(msp, mdp)(Header);

