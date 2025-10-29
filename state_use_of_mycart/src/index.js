import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyCart from './App'; // using MyCart as default export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyCart />
  </React.StrictMode>
);
