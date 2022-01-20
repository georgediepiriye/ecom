import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';



ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

