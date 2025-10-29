import React, { useState } from 'react';
import './App.css';

function MyCart() {
  // Step 1: Create state variable
  const [count, setCount] = useState(0);

  // Step 2: Create event handler functions
  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="cart-container">
      <h1>🛒 MyCart App</h1>
      <h2>Items in Cart: {count}</h2>

      <div className="buttons">
        <button onClick={addItem}>Add Item</button>
        <button onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
}

export default MyCart;
