import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';


const Detail = ({ products }) => {
  const { id } = useParams();
  // const product = products.find((item) => item.id.toString() === id);

  // if (!product) {
  //   return <div className="product-detail-section">Product not found.</div>;
  // }

  return (
    <Layout>
    <section className="product-detail-section">
     
      <div className="product-detail-container">
      <h2>Back</h2>
        <div className="product-image">
          <img src='https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp'  />
        </div>
        <div className="product-info">
          <h1>dfdfdfdf</h1>
          <p className="price">$dfdfdfd</p>
          <p className="description">dfdffdf</p>
          <button className="add-to-cart-btn">Add to Cart 🛒</button>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Detail;
