import React from "react";

const Application = ({ children }) => {
  return (
    <>
      <div className="application">
        <header>Header</header>
        {children}
      </div>
    </>
  );
};

export default Application;
