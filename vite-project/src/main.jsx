import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import WeatherDetails from "./components/Header.jsx";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WeatherDetails />
    <App />
  </React.StrictMode>
);
