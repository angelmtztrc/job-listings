import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Context
import { JobsContext } from '../context/jobs/JobsProvider';

const Job = ({ job }) => {
  // Access to the context
  const JobsState = useContext(JobsContext);
  const { fnAddFilter } = JobsState;

  // Object destructuring
  const { role, level, languages, tools, logo } = job;

  // Create an array with all categories
  const categories = [role, level, ...tools, ...languages];

  // Add filter
  const handleAddFilter = value => {
    fnAddFilter(value);
  };

  return (
    <li
      className={`${
        job.new && job.featured ? 'border-l-4 border-cyan-primary' : ''
      }  mb-10 p-5 lg:p-8 shadow-md rounded-md`}
    >
      <div className="flex flex-wrap lg:flex-no-wrap justify-between items-center">
        <div className="w-full lg:w-auto relative flex flex-col lg:flex-row border-b-2 lg:border-none border-cyan-dark-grayish">
          <div
            style={{
              backgroundImage: `url(${require(`./../images/${logo}`)})`
            }}
            className="h-12 w-12 lg:h-24 lg:w-24 rounded-full mr-5 bg-cover bg-center absolute lg:relative top-0 left-0 -mt-10 lg:mt-0"
          ></div>
          <div className="pb-4 lg:pb-0 mt-5 lg:mt-0">
            <div className="flex items-center mb-3">
              <p className="text-xs lg:text-base text-cyan-primary font-semibold mr-2 lg:mr-5">
                {job.company}
              </p>
              {job.new ? (
                <div className="mr-1 lg:mr-3 px-2 pt-2 pb-1 lg:px-3 lg:pt-3 lg:pb-2 bg-cyan-primary leading-none rounded-full text-white font-semibold">
                  <p className="text-xs lg:text-sm">NEW!</p>
                </div>
              ) : null}
              {job.featured ? (
                <div className="px-2 pt-2 pb-1 lg:px-3 lg:pt-3 lg:pb-2 bg-cyan-very-dark-grayish leading-none rounded-full text-white font-semibold">
                  <p className="text-xs lg:text-sm">FEATURED</p>
                </div>
              ) : null}
            </div>
            <h2 className="text-base lg:text-xl text-cyan-very-dark-grayish hover:text-cyan-primary font-bold cursor-pointer transition-colors ease-out duration-300">
              {job.position}
            </h2>
            <div className="text-cyan-dark-grayish mt-3 text-xs lg:text-base extra-info">
              <span>{job.postedAt}</span>
              <span>{job.contract}</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        {/* end - information of the job */}
        <ul className="flex flex-wrap mt-4 lg:mt-0">
          {categories.map((category, index) => (
            <li key={index} className="mr-1 lg:mr-2 mb-1 lg:mb-0">
              <button
                onClick={() => handleAddFilter(category)}
                className="text-xs lg:text-base px-4 py-2 focus:outline-none bg-cyan-light-gryish hover:bg-cyan-primary text-cyan-primary hover:text-cyan-light-gryish font-semibold rounded-md transition-colors ease-in-out duration-500"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired
};

export default Job;
