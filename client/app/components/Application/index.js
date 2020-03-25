import React from 'react';

import Header from '../Header';

const Application = ({ children }) => {
  return (
    <>
      <div className="application">
        <Header />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Application;
