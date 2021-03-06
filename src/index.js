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
  process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  process.env.NODE_ENV === 'development'
    ?
    applyMiddleware(
      promiseMiddleware(), // shorter async actions
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
    :
    applyMiddleware(
      promiseMiddleware(), // shorter async actions
      thunkMiddleware // lets us dispatch() functions
    )
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
