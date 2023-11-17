import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from "react-cookie"
import './styles/index.css';
import App from '../src/views/App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CookiesProvider>
);


reportWebVitals();
