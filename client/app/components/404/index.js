import React from 'react';

import { Link } from 'react-router-dom';

import Head from '../Head';

const Page404 = () => {
  return (
    <>
      <Head title="404" description="404, Not Found Page" />
      <div className="flex h-64 justify-center items-center">
        <div className="mt-4 sm:mt-6 text-sm text-white">
          <h3 className="font-semibold sm:text-base">Page Not Found</h3>
          <p className="py-2 font-semibold">
            {"Oops! We can't find the page you're looking for."}
          </p>
          <Link to="/" className="btn-link">
            Back To Home
          </Link>
        </div>{' '}
      </div>
    </>
  );
};

export default Page404;
