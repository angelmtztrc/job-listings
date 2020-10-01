import React, { createContext, useReducer } from 'react';

// Data
import data from '../../api/data.json';

// Reducer
import JobsReducer from './JobsReducer';

// Context
export const JobsContext = createContext();

export const JobsProvider = props => {
  const initialState = {
    jobs: data,
    filters: []
  };

  const [state, dispatch] = useReducer(JobsReducer, initialState);

  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        filters: state.filters
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};
