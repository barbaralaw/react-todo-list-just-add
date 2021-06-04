// imports react component functionality from react
import React from 'react';
// imports react DOM interaction functionality from react
import ReactDOM from 'react-dom';
// imports index styles
import './index.css';
// imports app component from app file
import App from './App';
// imports reportWebVitals from file. Allows site to cache resources
import reportWebVitals from './reportWebVitals';

// renders the following
ReactDOM.render(
  // using strictMode to highlight potential problems (only runs in dev mode)
  <React.StrictMode>
    // renders app component
    <App />
  </React.StrictMode>,
  // will render app component in #root element of index.html
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// this caches resources so the page will still be viewable on slow connections
reportWebVitals();
