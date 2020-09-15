import { authConstants } from '../../_constants';
import { authService } from '../../_services';
import { alertActions } from '.';
import { history } from '../../_helpers';

export const authActions = {
    login,
    logout
};

function login(email, password) {
    return dispatch => {
        dispatch({ 
            type: authConstants.LOGIN_REQUEST, 
            email 
        });

        authService.login(email, password)
        .then(
            user => { 
                dispatch({ 
                    type: authConstants.LOGIN_SUCCESS, 
                    user 
                });
                history.push('/');
            },
            error => {
                dispatch({ 
                    type: authConstants.LOGIN_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function logout() {
    authService.logout();
    return { type: authConstants.LOGOUT };
}