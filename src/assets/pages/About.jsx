import React from 'react';
import Layout from '../../components/Layout';

const About = () => {
  return (
    <Layout>
         <div className="about-clean">
      <div className="section">
        <h2>About This Project</h2>
        <p>
          This is a personal learning project inspired by Amazon. It demonstrates how to build a modern e-commerce
          frontend using React and covers key concepts like routing, state management, reusable components, and UI design.
        </p>
      </div>

      <div className="section">
        <h2>Our Mission</h2>
        <p>
          To help developers practice building real-world user interfaces by simulating a complete shopping experience —
          from product browsing to cart interaction — using only frontend tools.
        </p>
      </div>

      <div className="section">
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>React.js</strong> – Component-based UI</li>
          <li><strong>CSS</strong> – Custom styling and layout</li>
          <li><strong>React Router</strong> – Page navigation</li>
          <li><strong>Firebase / Node.js (optional)</strong> – For backend features (to be added)</li>
        </ul>
      </div>

      <div className="section">
        <h2>Contact</h2>
        <p>
          Questions or feedback? Contact me at <strong>you@example.com</strong>
        </p>
      </div>
    </div>

    </Layout>
  );
};

export default About;
