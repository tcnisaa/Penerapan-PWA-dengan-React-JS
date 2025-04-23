import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Tambahkan ini

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mendaftarkan service worker agar aplikasi bisa offline
serviceWorkerRegistration.register(); // Tambahkan ini

// Jika ingin mengukur performa, tambahkan log ke analytics atau console.
reportWebVitals();
