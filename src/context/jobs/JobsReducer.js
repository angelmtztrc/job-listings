// Constants
import { ADD_FILTER } from '../../constants';

export default (state, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload]
      };
    default:
      return state;
  }
};
