import React, { createContext, useReducer } from 'react';

// Data
import data from '../../api/data.json';

// Reducer
import JobsReducer from './JobsReducer';

// Constants
import { ADD_FILTER, REMOVE_FILTER } from '../../constants';

// Context
export const JobsContext = createContext();

export const JobsProvider = props => {
  const initialState = {
    jobs: data,
    filters: []
  };

  const [state, dispatch] = useReducer(JobsReducer, initialState);

  // Add new filter to the array of the filters
  const fnAddFilter = value => {
    dispatch({
      type: ADD_FILTER,
      payload: value
    });
  };

  // Remove a filter from the array
  const fnRemoveFilter = value => {
    dispatch({
      type: REMOVE_FILTER,
      payload: value
    });
  };

  return (
    <JobsContext.Provider
      value={{
        // State
        jobs: state.jobs,
        filters: state.filters,
        // Functions
        fnAddFilter,
        fnRemoveFilter
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};
