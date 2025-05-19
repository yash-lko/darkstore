import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call)
    console.log('Registering:', formData);
    alert('Account created successfully!');
  };

  return (
    <Layout>
    <section className="register-section">
      <div className="register-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
    </Layout>
  );
};

export default Register;
