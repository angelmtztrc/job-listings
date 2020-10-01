import React, { useContext } from 'react';

// Context
import { JobsContext } from '../context/jobs/JobsProvider';

// Components
import Job from './Job';

const JobsList = () => {
  // Access to the context
  const JobsState = useContext(JobsContext);
  const { jobs, filters } = JobsState;

  return (
    <ul className="flex flex-col container mx-auto">
      {jobs
        .filter(job => {
          let categories = [
            job.role,
            job.level,
            ...job.tools,
            ...job.languages
          ];

          return filters.every(filter => categories.includes(filter));
        })
        .map(job => (
          <Job key={job.id} job={job} />
        ))}
    </ul>
  );
};

export default JobsList;
