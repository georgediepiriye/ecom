import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';



ReactDOM.render(
  <React.StrictMode>
    <ProductsList/>
  </React.StrictMode>,
  document.getElementById('root')
);

