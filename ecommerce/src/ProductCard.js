import React from 'react';

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="card-img" />
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>

      <div className="card-buttons">
        <button onClick={props.onAdd}>Add to Cart</button>
        <button onClick={props.onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default ProductCard;
