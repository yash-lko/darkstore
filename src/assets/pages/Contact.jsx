import React, { useState } from 'react';
import Layout from '../../components/Layout';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log data (can be connected to backend or email service)
    console.log('Form submitted:', formData);
    alert("Thanks for contacting us!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or need help with an order? Reach out to us below.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message ✉️</button>
        </form>
      </div>
    </section>
    </Layout>
  );
};

export default Contact;
