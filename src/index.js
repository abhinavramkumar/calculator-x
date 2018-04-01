import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const appRoot = document.getElementById('root')

render(
  <App/>, appRoot);
registerServiceWorker();
