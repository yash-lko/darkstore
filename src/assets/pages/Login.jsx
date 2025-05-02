import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const SignIn = () => {
  return (
    <Layout>
    <div className="signin-container">
      <h2>Sign In</h2>

      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="signin-btn">Sign In</button>
      </form>

      <p className="redirect-text">
        Don't have an account? 
        
        <Link to="/register"> Register here</Link>
      </p>
    </div>
    </Layout>
  );
};

export default SignIn;
