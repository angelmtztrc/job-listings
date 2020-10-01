// Constants
import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from '../../constants';

export default (state, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload]
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.payload)
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filters: []
      };
    default:
      return state;
  }
};
