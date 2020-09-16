import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { schedules } from './schedules.reducer';

const rootReducer = combineReducers({
  auth,
  users,
  alert,
  schedules
});

export default rootReducer;