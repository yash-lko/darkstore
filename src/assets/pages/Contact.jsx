import React from 'react';
import Layout from '../../components/Layout';

const Contact = () => {
  return (
    <Layout>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or just want to say hello — feel free to drop us a message!</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
        </div>

        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
    </Layout>
  );
};

export default Contact;
