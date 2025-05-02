import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../components/context/searchContext';



const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);


  const {searchTerm}=useContext(SearchContext)

  console.log(searchTerm, "search term")




  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  console.log(filteredProducts, "Filter Daa")

  return (
    <Layout>
    <div className="container">
  <aside className="sidebar glass">
    <h3>Category</h3>
    <ul>
      <li><input type="radio" name="category" defaultChecked /> All</li>
      <li><input type="radio" name="category" /> Sneakers</li>
      <li><input type="radio" name="category" /> Flats</li>
      <li><input type="radio" name="category" /> Sandals</li>
      <li><input type="radio" name="category" /> Heels</li>
    </ul>

    <h3>Price</h3>
    <ul>
      <li><input type="radio" name="price" /> All</li>
      <li><input type="radio" name="price" /> $0 - $50</li>
      <li><input type="radio" name="price" /> $50 - $100</li>
      <li><input type="radio" name="price" /> $100 - $150</li>
      <li><input type="radio" name="price" defaultChecked /> Over $150</li>
    </ul>

    <h3>Colors</h3>
    <ul>
      <li><input type="radio" name="color" defaultChecked /> All</li>
      <li><input type="radio" name="color" /> Black</li>
      <li><input type="radio" name="color" /> Blue</li>
      <li><input type="radio" name="color" /> Red</li>
      <li><input type="radio" name="color" /> Green</li>
      <li><input type="radio" name="color" /> White</li>
    </ul>
  </aside>

  <main className="main-content">
    <div className="filters">
      <button>All Products</button>
      <button>Nike</button>
      <button>Adidas</button>
      <button>Puma</button>
      <button>Vans</button>
    </div>

    <div className="product-grid">
      {filteredProducts.map((item, index) => (
        <div className="product-card glass" key={index}>
          <img
            src={item.thumbnail}
            alt="Shoe"
          />
          <h4>{item.title}</h4>
          {/* <p>⭐⭐⭐⭐☆ (123 reviews)</p> */}
          <p>${item.price}</p>
          <button className="add-to-cart">Add to Cart 🛒</button>
        </div>
      ))}
    </div>
  </main>
</div>

    </Layout>
  );
};

export default Home;
