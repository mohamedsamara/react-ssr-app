import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Router from './router';

import Application from './components/Application';

// Import application sass styles
import './styles/sass/style.scss';

// Import application css styles
import './styles/css/style.css';

// Import Tailwind css
import './styles/css/tailwind.css';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
