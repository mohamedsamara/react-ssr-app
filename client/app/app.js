import React from "react";

import { BrowserRouter } from "react-router-dom";

import Router from "./router";

import Application from "./components/Application";

const App = () => {
  return (
    <BrowserRouter>
      <Application>
        <Router />
      </Application>
    </BrowserRouter>
  );
};

export default App;
