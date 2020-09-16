import { actionTypes } from '../action.types';
import { authService } from '../../_services';
import { history } from '../../_helpers';
import { alertActions } from './';

export const authActions = {
    login,
    logout
};

function login(email, password) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.AUTH.LOGIN_REQUEST, 
            email 
        });

        authService.login(email, password)
        .then(
            user => { 
                dispatch({ 
                    type: actionTypes.AUTH.LOGIN_SUCCESS, 
                    user 
                });
                history.push('/');
            },
            error => {
                dispatch({ 
                    type: actionTypes.AUTH.LOGIN_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function logout() {
    authService.logout();
    return { type: actionTypes.AUTH.LOGOUT };
}