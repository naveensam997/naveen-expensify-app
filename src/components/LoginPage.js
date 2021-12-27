import React from 'react';
import { connect } from 'react-redux';
import { StartLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className='box-layout'>
    <div className="box-layout__box">
    <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
    <button className='button' onClick={startLogin}>Login with Google</button>
    </div>
    
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(StartLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
