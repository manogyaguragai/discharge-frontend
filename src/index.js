// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Index.css';  // This should work if styles folder is in src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);