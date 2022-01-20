import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';



ReactDOM.render(
  <React.StrictMode>
    <Product/>
  </React.StrictMode>,
  document.getElementById('root')
);

