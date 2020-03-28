import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Router from './router';

// Import Tailwind css
import './styles/css/tailwind.css';

// Import application css styles
import './styles/css/style.css';

// Import application sass styles
// import './styles/sass/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
