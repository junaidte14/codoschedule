import { actionTypes } from '../action.types';

export function users(state = {}, action) {
  switch (action.type) {
    case actionTypes.USERS.GETALL_REQUEST:
      return {
        loading: true
      };
    case actionTypes.USERS.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case actionTypes.USERS.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}