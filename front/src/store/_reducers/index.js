import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { schedules } from './schedules.reducer';
import { todolists } from './todolists.reducer';

const rootReducer = combineReducers({
  auth,
  users,
  alert,
  schedules,
  todolists
});

export default rootReducer;