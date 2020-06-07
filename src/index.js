import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  const store = configureStore();

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state ->');
    console.log(store.getState());
  }

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
