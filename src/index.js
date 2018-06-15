import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware'

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

import reducers from './redux/reducers';
import Root from './containers/Root';

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    promiseMiddleware(), // shorter async actions
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
