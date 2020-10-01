import React, { useContext } from 'react';

// Context
import { JobsContext } from '../context/jobs/JobsProvider';

// Components
import Job from './Job';

const JobsList = () => {
  const JobsState = useContext(JobsContext);
  const { jobs } = JobsState;

  return (
    <ul className="flex flex-col container mx-auto">
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobsList;
