import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';


import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate}{...alertOptions}>
  <div>
    <App/>

  </div></AlertProvider>,
  document.getElementById('root')
);



