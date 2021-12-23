import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { StartLogout } from '../actions/auth';

const Header = ({StartLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={StartLogout}>Logout</button>
  </header>
);
const mapDispatchToProps = (dispatch) => ({
  StartLogout : () => dispatch(StartLogout()) 
})

export default connect(undefined,mapDispatchToProps)(Header);
