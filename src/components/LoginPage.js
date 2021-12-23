import React from 'react';
import { connect } from 'react-redux';
import { StartLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(StartLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
