import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { SearchContext } from '../../components/context/searchContext';
import { Link } from 'react-router-dom';




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
  

  console.log(filteredProducts,"Filtered products")

  console.log(filteredProducts, "Filter Daa")
  const skeletonArray = Array(10).fill(null); 
  return (
    <Layout>
    <div className="container">
  <aside className="sidebar glass">
    <h3>Category</h3>
    <ul>
      <li><input type="radio" name="category" defaultChecked /> All</li>
      <li><input type="radio" name="category" /> Sneakers</li>
      
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
  {loading ? (
    <>
      {skeletonArray.map((_, index) => (
        <div className="product-card skeleton-card glass" key={index}>
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-price" />
          <div className="skeleton-button" />
        </div>
      ))}
    </>
  ) : (
    <>
      {filteredProducts.map((item, index) => (
        <div className="product-card glass" key={index}>
          <Link to={`/detail/${item.id}`}><img src={item.thumbnail} alt={item.title} /></Link>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <button className="add-to-cart">Add to Cart 🛒</button>
        </div>
      ))}
    </>
  )}
</div>

  </main>
</div>

    </Layout>
  );
};

export default Home;
