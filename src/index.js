import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { loadInitialState } from './store/middleware/local-storage/load-initial-state';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

const renderApp = () => {
  const initialState = loadInitialState()
  const store = configureStore(initialState)

  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
