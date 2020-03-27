import React from 'react';

import Header from '../Header';

const Application = ({ children }) => {
  return (
    <>
      <div className="application">
        <Header />
        <main className="main container mx-auto py-3 sm:py-5 md:py-6 lg:py-7 px-3 sm:px-5">
          {children}
        </main>
      </div>
    </>
  );
};

export default Application;
