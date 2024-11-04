// src/SignUp.jsx
import React from 'react';
import './SignUp.css'; // Import file CSS untuk styling
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* <h2>Welcome to <span className="brand">WEBSKOM</span></h2> */}
        <h1>Sign up</h1>

        <form>
          <label>
            Enter your username or email address
            <input type="text" placeholder="Username or email address" />
          </label>
          <div className="input-row">
            <label>
              User name
              <input type="text" placeholder="User name" />
            </label>
            <label>
              Contact Number
              <input type="text" placeholder="Contact Number" />
            </label>
          </div>
          <label>
            Enter your Password
            <input type="password" placeholder="Password" />
          </label>

          <button type="submit" className="signup-button">Sign up</button>
        </form>

        {/* <div className="signin-link">
          Have an Account? <a href="#">Sign in</a>
        </div> */}

        <div className="account-container">
          <span className="no-account">Have an Account?</span>
          <Link to="/register" className="magang-link">Sign In</Link>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
