import React from 'react';
import { render, hydrate } from 'react-dom';

import App from './app';

const rootElement = document.getElementById('root');

const renderMethod = module.hot ? render : hydrate;

if (module.hot) {
  module.hot.accept('./router', () => {
    renderMethod();
  });
}

renderMethod(<App />, rootElement);
