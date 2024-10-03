// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new React 18 root API
import './index.css'; // Your global styles, if any
import App from './App'; // Import your main App component
import '@fortawesome/fontawesome-free/css/all.min.css';


// Create a root element and render your app inside it
const root = ReactDOM.createRoot(document.getElementById('app')); // 'app' corresponds to the div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
