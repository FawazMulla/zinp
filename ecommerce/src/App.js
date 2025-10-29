import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  // Step 1: Product data (sent to child as props)
  const products = [
    { id: 1, name: 'Laptop', price: 50000, image: 'https://cdn-icons-png.flaticon.com/512/3131/3131629.png' },
    { id: 2, name: 'Headphones', price: 3000, image: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png' },
    { id: 3, name: 'Smartphone', price: 25000, image: 'https://cdn-icons-png.flaticon.com/512/747/747376.png' },
    { id: 4, name: 'Camera', price: 15000, image: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png' },
    { id: 5, name: 'Smartwatch', price: 8000, image: 'https://cdn-icons-png.flaticon.com/512/2921/2921825.png' },
  ];

  // Step 2: Cart state — keeps track of products & quantities
  const [cart, setCart] = useState([]);

  // Step 3: Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Step 4: Remove product (decrease quantity or remove)
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Step 5: Calculate totals
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="app-container">
      <h1> E-Commerce Shopping Cart</h1>

      {/* Product Cards */}
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAdd={() => addToCart(product)}
            onRemove={() => removeFromCart(product.id)}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h2> Cart Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="total-info">
          <h3>Total Items: {totalItems}</h3>
          <h3>Total Cost: ₹{totalCost}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
