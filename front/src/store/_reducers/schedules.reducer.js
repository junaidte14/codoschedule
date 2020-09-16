import { scheduleConstants } from '../../_constants';

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
    case scheduleConstants.GETALL_REQUEST:
      return state;
    case scheduleConstants.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.schedules.data
      }
    case scheduleConstants.UPDATE_ORDERBY:
      return {
        ...state,
        orderBy: action.orderBy
      }
    case scheduleConstants.UPDATE_ORDERDIR:
      return {
        ...state,
        orderDir: action.orderDir
      }
    case scheduleConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}