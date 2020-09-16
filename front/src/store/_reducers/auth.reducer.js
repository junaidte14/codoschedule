import { actionTypes } from '../action.types';

let user = JSON.parse(localStorage.getItem('codoschedule-user'));
const initialState = user ? { loggedIn: true, user } : {loggedIn: false};

export function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case actionTypes.AUTH.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user
      };
    case actionTypes.AUTH.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false
      };
    case actionTypes.AUTH.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state
  }
}