import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './context/searchContext';

const Header = () => {
  const [category, setCategory] = useState('all');
  const { setSearchTerm } = useContext(SearchContext);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    console.log('Selected Category:', selected);
    // Optionally: setSelectedCategory(selected); <-- if you add it to context later
  };

  return (
    <header class="top-header glass">
    <Link to={'/'} class="logo">🛍️ DarkStore</Link>
    <div class="search-container">
      <input type="text" placeholder="Search shoes..." />
    </div>
    <div class="icons">
      <Link to={'/about'} class="nav-link">About</Link>
      <Link to={'/contact'} class="nav-link">Contact</Link>
     <Link to={'/login'} class="nav-link">Login</Link> 
      <span class="icon">🛒</span>
      <span class="icon">👤</span>
    </div>
  </header>
  );
};

export default Header;
