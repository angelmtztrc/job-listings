import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Context
import { JobsContext } from '../context/jobs/JobsProvider';

const Job = ({ job }) => {
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
    <li className="border-l-4 border-cyan-primary p-8 shadow-md rounded-md mb-5">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div
            style={{
              backgroundImage: `url(${require(`./../images/${logo}`)})`
            }}
            className="h-24 w-24 rounded-full mr-5 bg-cover bg-center"
          ></div>
          <div>
            <section className="flex items-center mb-3">
              <p className="text-cyan-primary font-semibold mr-5">
                {job.company}
              </p>
              {job.new ? (
                <span className="text-xs mr-3 px-3 pt-3 pb-2 bg-cyan-primary leading-none rounded-full text-white font-semibold">
                  <p>NEW!</p>
                </span>
              ) : null}
              {job.featured ? (
                <span className="text-xs px-3 pt-3 pb-2 bg-cyan-very-dark-grayish leading-none rounded-full text-white font-semibold">
                  <p>FEATURED</p>
                </span>
              ) : null}
            </section>
            <h2 className="text-xl text-cyan-very-dark-grayish hover:text-cyan-primary font-bold cursor-pointer transition-colors ease-out duration-300">
              {job.position}
            </h2>
            <section id="extra-info" className="text-cyan-dark-grayish mt-3">
              <span>{job.postedAt}</span>
              <span>{job.contract}</span>
              <span>{job.location}</span>
            </section>
          </div>
        </div>
        {/* end - information of the job */}
        <ul className="flex">
          {categories.map((category, index) => (
            <li key={index} className="mr-2">
              <button
                onClick={() => handleAddFilter(category)}
                className="px-4 py-2 focus:outline-none bg-cyan-light-gryish hover:bg-cyan-primary text-cyan-primary hover:text-cyan-light-gryish font-semibold rounded-md transition-colors ease-in-out duration-500"
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
