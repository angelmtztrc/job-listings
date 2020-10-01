import React from 'react';

const Job = () => {
  return (
    <li className="border-l-4 border-cyan-primary p-8 shadow-md rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="h-24 w-24 bg-gray-500 rounded-full mr-5"></div>
          <div>
            <section className="flex items-center mb-3">
              <p className="text-cyan-primary font-semibold mr-5">
                T-Rex Codes
              </p>
              <span className="text-xs mr-3 px-3 pt-3 pb-2 bg-cyan-primary leading-none rounded-full text-white font-semibold">
                <p>NEW!</p>
              </span>
              <span className="text-xs px-3 pt-3 pb-2 bg-cyan-very-dark-grayish leading-none rounded-full text-white font-semibold">
                <p>FEATURED</p>
              </span>
            </section>
            <h2 className="text-xl text-cyan-very-dark-grayish hover:text-cyan-primary font-bold cursor-pointer transition-colors ease-out duration-300">
              Senio Frontend Developer
            </h2>
            <section id="extra-info" className="text-cyan-dark-grayish mt-3">
              <span>1d ago</span>
              <span>Full Time</span>
              <span>USA only</span>
            </section>
          </div>
        </div>
        {/* end - information of the job */}
        <ul className="flex">
          <li className="mr-2">
            <button className="px-4 py-2 focus:outline-none bg-cyan-light-gryish hover:bg-cyan-primary text-cyan-primary hover:text-cyan-light-gryish font-semibold rounded-md transition-colors ease-in-out duration-500">
              Senior
            </button>
          </li>
          <li className="mr-2">
            <button className="px-4 py-2 focus:outline-none bg-cyan-light-gryish hover:bg-cyan-primary text-cyan-primary hover:text-cyan-light-gryish font-semibold rounded-md transition-colors ease-in-out duration-500">
              Frontend
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Job;
