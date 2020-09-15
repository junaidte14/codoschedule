import { userConstants } from '../../_constants';
import { userService } from '../../_services';

export const userActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch({ 
            type: userConstants.GETALL_REQUEST 
        });

        userService.getAll()
            .then(
                users => dispatch({ 
                    type: userConstants.GETALL_SUCCESS, 
                    users 
                }),
                error => dispatch({ 
                    type: userConstants.GETALL_FAILURE, 
                    error 
                })
            );
    };
}