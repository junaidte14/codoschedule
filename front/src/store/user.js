import { createSlice } from '@reduxjs/toolkit';
import vars from '../config/env';

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action) =>  {
        state.user = null;
        localStorage.removeItem('user')
    },
  },
});

export default slice.reducer

// Actions
const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ email, password }) => dispatch => {
    fetch(vars.apiURL+'auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        dispatch(loginSuccess(res.json()));
    })
    .catch(err => {
        console.log(err);
        dispatch({error: err});
    });
}

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}