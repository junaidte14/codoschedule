import { actionTypes } from '../action.types';

const initialState = {
  loading: true,
  actionLoader: false,
  items: [],
  orderBy: 'date',
  orderDir: 'asc',
  queryText: '',
  error: null
};
export function schedules(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SCHEDULES.GETALL_REQUEST:
      return state;
    case actionTypes.SCHEDULES.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.schedules.data
      }
    case actionTypes.SCHEDULES.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      }

    case actionTypes.SCHEDULES.ADD_REQUEST:
      return {
        ...state,
        actionLoader: true
      };
    case actionTypes.SCHEDULES.ADD_SUCCESS:
      return {
        ...state,
        actionLoader: false
      }
    case actionTypes.SCHEDULES.ADD_FAILURE:
      return {
        ...state,
        error: action.error,
        actionLoader: false
      }

    case actionTypes.SCHEDULES.DELETE_REQUEST:
      return state;
    case actionTypes.SCHEDULES.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter(e => e._id !== action.schedules.data)
      }
    case actionTypes.SCHEDULES.DELETE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    
    case actionTypes.SCHEDULES.UPDATE_QUERY_TEXT:
      return {
        ...state,
        queryText: action.queryText
      }
    default:
      return state
  }
}