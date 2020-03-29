import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  const [collapse, setCollapse] = useState(false);

  const handleToggleNav = () => {
    setCollapse(!collapse);
  };

  return (
    <header className="flex items-center justify-between flex-wrap bg-gray-900 px-4 py-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          React SSR Application
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleToggleNav}
          type="button"
          aria-label="toggle navigation"
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {collapse ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className={collapse ? 'mobile-nav' : 'mobile-nav collapsed'}>
          <div className="inner-nav text-sm lg:flex-grow">
            <Link
              to="/"
              className="px-2 py-1 md:py-2 text-white font-semibold rounded hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-2 py-1 md:py-2 text-white font-semibold rounded hover:bg-gray-800"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
