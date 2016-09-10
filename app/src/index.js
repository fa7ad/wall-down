import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Store from './Store';

ReactDOM.render(
  <App store={new Store()} remote={window.require('electron').remote}/>,
  document.getElementById('root')
);