import React from 'react';
import { render, hydrate } from 'react-dom';

import App from './app';

const rootElement = document.getElementById('root');

// Fix: Expected server HTML to contain a matching <a> in
// const renderMethod = module.hot ? render : hydrate;

// renderMethod(<App />, document.getElementById("root"));

hydrate(<App />, rootElement);
