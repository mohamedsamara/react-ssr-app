import React from 'react';

import Head from '../Head';

const Homepage = () => {
  return (
    <div className="homepage">
      <Head title="Homepage" description="Homepage, Landing Page" />
      <img
        className="bg-img"
        src="/images/background.svg"
        alt="homepage background"
      />
    </div>
  );
};

export default Homepage;
