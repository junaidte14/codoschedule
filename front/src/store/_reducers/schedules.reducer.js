import { actionTypes } from '../action.types';

const initialState = {
  loading: true,
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
    case actionTypes.SCHEDULES.UPDATE_ORDER_BY:
      return {
        ...state,
        orderBy: action.orderBy
      }
    case actionTypes.SCHEDULES.UPDATE_ORDER_DIR:
      return {
        ...state,
        orderDir: action.orderDir
      }
    case actionTypes.SCHEDULES.UPDATE_QUERY_TEXT:
      return {
        ...state,
        queryText: action.queryText
      }
    case actionTypes.SCHEDULES.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}