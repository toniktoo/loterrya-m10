import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Alert } from './components';

// optional cofiguration
const options = {
  position: 'top left',
  // timeout: 5000,
  offset: '10px',
  transition: 'fade',
  containerStyle: {
    zIndex: 100,
  },

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider template={Alert} {...options}>
    <App />
  </AlertProvider>
);

reportWebVitals();
