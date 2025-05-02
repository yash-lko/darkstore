import React, { useState } from 'react';
import Layout from '../../components/Layout';


const initialCartItems = [
  {
    id: 1,
    name: 'Sample Product 1',
    price: 29.99,
    quantity: 2,
    image: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
  },
  {
    id: 2,
    name: 'Sample Product 2',
    price: 49.99,
    quantity: 1,
    image: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle quantity change
  const handleQuantityChange = (id, action) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        if (action === 'increase') {
          item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Handle remove item from cart
  const handleRemoveItem = id => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <Layout>
     <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, 'decrease')}
                    >
                      &#8722; {/* Minus sign */}
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, 'increase')}
                    >
                      &#43; {/* Plus sign */}
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    🗑️ {/* Trash can icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${getTotalPrice()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
    </Layout>
  );
};

export default Cart;
