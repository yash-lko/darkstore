import React from 'react';


const Footer = () => {
  return (
    <footer class="footer glass">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>Your one-stop shop for the latest and coolest sneakers and styles.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email: support@shoestore.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Follow: 🔵 🐦 📸</p>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2025 DarkStore. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;
