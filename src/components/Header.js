import React from 'react';

const Header = () => {
  return (
    <header
      id="header"
      className="w-full h-56 bg-cyan-primary bg-cover bg-center relative"
    >
      <div style={{ bottom: -40 }} className="absolute bottom-0 left-0 w-full">
        <div className="container mx-auto ">
          <div className="bg-white px-8 py-4 shadow-md rounded-md flex justify-between items-center">
            <ul className="flex">
              <li className="bg-cyan-light-gryish p-3 pr-12 rounded-md relative">
                <p className="text-cyan-primary leading-none font-semibold mr-2">
                  Front-End
                </p>
                <button className="absolute top-0 right-0 bg-cyan-primary hover:bg-cyan-very-dark-grayish h-full w-10 flex justify-center items-center rounded-r-md transition-colors ease-out duration-300">
                  <svg
                    className="w-5 h-5 text-white"
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
            </ul>
            <button className="text-cyan-primary font-semibold hover:underline">
              Clear
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
