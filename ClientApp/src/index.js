import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const baseUrl = window.location.host;
const rootElement = document.getElementById('root');
//const baseNames = document.getElementsByTagName('base');

//alert("rootelement  is " + document.getElementById('root'));

/*ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);
*/
ReactDOM.render(
    <App />,
    rootElement);

registerServiceWorker();

