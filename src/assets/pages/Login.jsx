import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (e.g. API call)
    console.log('Logging in with:', credentials);
    alert('Login submitted');
  };

  return (
    <Layout>
    <section className="login-section">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <p className="register-link">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
    </Layout>
  );
};

export default Login;
