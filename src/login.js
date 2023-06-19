import React from 'react';
import './Sign.css';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className='back'>
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <Button variant="contained" href='/Home'>Login</Button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;