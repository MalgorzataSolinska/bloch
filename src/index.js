import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; 
import ScrollToTop from './components/ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);

// Jeśli chcesz mierzyć wydajność swojej aplikacji, możesz przekazać funkcję do logowania wyników (np. reportWebVitals(console.log))
// lub wysłać do punktu analitycznego. Dowiedz się więcej: https://bit.ly/CRA-vitals
reportWebVitals();
