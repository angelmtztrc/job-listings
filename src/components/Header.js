import React, { useContext } from 'react';

// Context
import { JobsContext } from '../context/jobs/JobsProvider';

const Header = () => {
  // Access to the context values
  const JobsState = useContext(JobsContext);
  const { filters, fnRemoveFilter, fnClearFilter } = JobsState;

  // Remove a filter
  const handleRemoveFilter = value => {
    fnRemoveFilter(value);
  };

  // Clear filters
  const handleClearFilters = () => {
    fnClearFilter();
  };

  return (
    <header
      id="header"
      className="w-full h-56 bg-cyan-primary bg-cover bg-center relative"
    >
      <div style={{ bottom: -40 }} className="absolute bottom-0 left-0 w-full">
        <div className="container mx-auto px-4 lg:px-0">
          {filters.length >= 1 ? (
            <div className="bg-white px-6 py-3 lg:px-8 lg:py-4 shadow-md rounded-md flex justify-between items-center">
              <ul className="flex flex-wrap">
                {filters.map((filter, index) => (
                  <li
                    key={index}
                    className="bg-cyan-light-gryish p-3 pr-12 rounded-md relative mr-2 mb-1 lg:mr-4 lg:mb-0"
                  >
                    <p className="text-xs lg:text-base text-cyan-primary leading-none font-semibold mr-2">
                      {filter}
                    </p>
                    <button
                      onClick={() => handleRemoveFilter(filter)}
                      className="absolute top-0 right-0 bg-cyan-primary hover:bg-cyan-very-dark-grayish h-full w-10 flex justify-center items-center rounded-r-md transition-colors ease-out duration-300"
                    >
                      <svg
                        className="w-3 h-3 lg:w-5 lg:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleClearFilters}
                className="text-cyan-primary font-semibold hover:underline"
              >
                Clear
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
