import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';


const Register = () => {
  return (
    <Layout>
    <div className="register-container">
      <h2>Create Account</h2>

      <form className="register-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        <button type="submit" className="register-btn">Register</button>
      </form>

      <p className="redirect-text">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
    </Layout>
  );
};

export default Register;
