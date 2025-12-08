import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Your main CSS file with Tailwind imports
import { CartProvider } from './CartContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);