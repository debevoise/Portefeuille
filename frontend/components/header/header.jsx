import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logoutUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

const Header = ({logout}) => {
    let history = useHistory();
    
    return (
      <header>
        <div className="inner-container">
          <div className="logo">Portefeuille</div>
          <ul className="nav">
            <li>
              <NavLink to="/stocks">Stocks</NavLink>
              <NavLink to="/transactions">Transactions</NavLink>
              
            </li>
          </ul>
        </div>
      </header>
    );
}

const msp = () => ({});
const mdp = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(msp, mdp)(Header);

