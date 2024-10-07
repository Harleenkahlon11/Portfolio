import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot in React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
