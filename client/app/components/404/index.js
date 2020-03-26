import React from 'react';

import { Link } from 'react-router-dom';

import Head from '../Head';

const Page404 = () => {
  return (
    <>
      <Head title="404" description="404, Not Found Page" />
      <div className="404">
        <div className="mt-4 sm:mt-6 text-sm text-white">
          <h3 className="font-semibold sm:text-base">Page Not Found</h3>
          <p className="py-2">
            {"Oops! We can't find the page you're looking for."}
          </p>
          <Link
            to="/"
            className="inline-block px-3 py-2 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold"
          >
            Back To Home
          </Link>
        </div>{' '}
      </div>
    </>
  );
};

export default Page404;
