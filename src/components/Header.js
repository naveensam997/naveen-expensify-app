import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StartLogout } from '../actions/auth';

const Header = ({StartLogout}) => (
  <header className='header'>
    <div className='containt_container'>
      <div className='header_container'>
    <Link to="/dashboard" className="header__title">
    <h1>Expensify</h1>
    </Link>
    {/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
    <button className='button button--link' onClick={StartLogout}>Logout</button>
    </div>
    </div>
  </header>
);
const mapDispatchToProps = (dispatch) => ({
  StartLogout : () => dispatch(StartLogout()) 
})

export default connect(undefined,mapDispatchToProps)(Header);
