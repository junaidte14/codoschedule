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
      return {
        ...state,
        loading: true
      }
    case actionTypes.SCHEDULES.GETALL_SUCCESS:
      return {
        ...state,
        items: action.schedules.data,
        loading: false
      }
    case actionTypes.SCHEDULES.GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    case actionTypes.SCHEDULES.GETBYID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.SCHEDULES.GETBYID_SUCCESS:
      return {
        ...state,
        item: action.schedule.data,
        loading: false
      }
    case actionTypes.SCHEDULES.GETBYID_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    case actionTypes.SCHEDULES.ADD_REQUEST:
      return {
        ...state,
        actionLoader: true
      }
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

    case actionTypes.SCHEDULES.UPDATE_REQUEST:
      return {
        ...state,
        actionLoader: true
      }
    case actionTypes.SCHEDULES.UPDATE_SUCCESS:
      {
        const newItems = state.items.map((schedule)=>{
          if(schedule._id === action.id) {
            return action.schedule
          } else return schedule;
        });
        return {
          ...state,
          items: newItems,
          item: action.schedule,
          actionLoader: false
        }
      }
    case actionTypes.SCHEDULES.UPDATE_FAILURE:
      return {
        ...state,
        error: action.error,
        actionLoader: false
      }

    case actionTypes.SCHEDULES.DELETE_REQUEST:
      return {
        ...state,
        actionLoader: true
      }
    case actionTypes.SCHEDULES.DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(e => e._id !== action.schedules.data),
        actionLoader: false
      }
    case actionTypes.SCHEDULES.DELETE_FAILURE:
      return {
        ...state,
        error: action.error,
        actionLoader: false
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