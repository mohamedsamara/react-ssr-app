/**
 *
 * index.js
 * This is the entry file for the client applicaiton
 */

import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render, hydrate } from 'react-dom';

import App from './app';

const rootElement = document.getElementById('root');
const renderMethod = module.hot ? render : hydrate;

const renderApp = () => {
  renderMethod(<App />, rootElement);
};

renderApp();

if (module.hot) {
  module.hot.accept('./router', () => {
    renderApp();
  });
}

if (process.env.NODE_ENV === 'production') {
  // Register a service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // eslint-disable-next-line compat/compat
      navigator.serviceWorker.register('sw.js');
    });
  }
}
