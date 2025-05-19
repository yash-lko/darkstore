import React from 'react';
import Layout from '../../components/Layout';


const About = () => {
  return (
    <Layout>
    <section className="about-section">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>DarkStore</strong> – your ultimate destination for exclusive fashion,
          premium sneakers, and urban essentials. Our mission is to bring you cutting-edge products
          with style, comfort, and authenticity at the core.
        </p>
        <p>
          From the latest drops to timeless staples, we curate every item with precision and passion.
          Whether you're shopping for streetwear or luxury, BlackMarket is built for the bold.
        </p>
        <p>
          We’re not just a store — we’re a movement. Fast shipping, secure checkout, and a community
          that sets the trend. Thank you for being a part of the BlackMarket family.
        </p>
      </div>
    </section>
    </Layout>
  );
};

export default About;
