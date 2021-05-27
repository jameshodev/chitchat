import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import logo from './logo.png';
import { auth, provider } from './firebase';

function Login() {
  const signIn = (event) => {
    // do clever google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
    // console.log('error is: ', auth.signInWithPopup());
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
