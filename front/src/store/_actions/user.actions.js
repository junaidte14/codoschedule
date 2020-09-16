import { actionTypes } from '../action.types';
import { userService } from '../../_services';

export const userActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch({ 
            type: actionTypes.USERS.GETALL_REQUEST 
        });

        userService.getAll()
            .then(
                users => dispatch({ 
                    type: actionTypes.USERS.GETALL_SUCCESS, 
                    users 
                }),
                error => dispatch({ 
                    type: actionTypes.USERS.GETALL_FAILURE, 
                    error 
                })
            );
    };
}