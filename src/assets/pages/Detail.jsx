import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Use null for clean initial state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);


  

  return (
    <Layout>
          <div className="product-detail-page">
          <div className="product-detail-container">
      {loading ? (
        <h2 style={{textAlign:'center'}}>Loading...</h2>
      ) : (
      <>
            <div className="product-image">
              
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="product-info">
              <h1>{product.title}</h1>
              <p className="rating">★★★★☆ ({product.rating} rating)</p>
              <p className="price">${product.price}</p>
              <p className="description">{product.description}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
        </>
      )}
        </div>
        </div>
    </Layout>
    
  );
};

export default Detail;
