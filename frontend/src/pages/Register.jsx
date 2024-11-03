// src/SignIn.jsx
import React from 'react';
import './SignIn.css'; // Import file CSS untuk styling
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-card">
        {/* <h2>Welcome to <span className="brand">WEBSKOM</span></h2> */}
        <h1>Sign in</h1>
        <button className="google-signin">
          <img src="https://www.google.com/favicon.ico" alt="Google" /> Sign in with Google
        </button>

        <form>
          <label>
            Enter your username or email address
            <input type="text" placeholder="Username or email address" />
          </label>
          <label>
            Enter your Password
            <input type="password" placeholder="Password" />
          </label>
          <div className="form-footer">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="signin-button">Sign in</button>
        </form>

        <div className="account-container">
          <span className="no-account">No Account?</span>
          <Link to="/login" className="magang-link">Sign Up</Link>
        </div>

        {/* <div className="signup-link">
          No Account? <Link to="/login">
            <h5 className="textbaru">Magang</h5>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default SignIn;
