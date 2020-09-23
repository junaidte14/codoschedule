import { actionTypes } from '../action.types';
import { alertActions } from './';
import { todolistService } from '../../_services';

export const todolistActions = {
    getAll,
    getAllByAttr,
    getItemById,
    addItem,
    updateItem,
    deleteItem,
};

function getAll() {
    return dispatch => {
        dispatch({ 
            type: actionTypes.TODOLISTS.GETALL_REQUEST 
        });

        todolistService.getAll()
        .then(
            todolists => dispatch({ 
                type: actionTypes.TODOLISTS.GETALL_SUCCESS, 
                todolists 
            }),
            error => dispatch({ 
                type: actionTypes.TODOLISTS.GETALL_FAILURE, 
                error 
            })
        );
    };
}

function getAllByAttr(attr) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.TODOLISTS.GETALLBYSCHEDULE_REQUEST 
        });

        todolistService.getAllByAttr(attr)
        .then(
            todolists => dispatch({ 
                type: actionTypes.TODOLISTS.GETALLBYSCHEDULE_SUCCESS, 
                todolists 
            }),
            error => dispatch({ 
                type: actionTypes.TODOLISTS.GETALLBYSCHEDULE_FAILURE, 
                error 
            })
        );
    };
}

function getItemById(id) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch({ 
                type: actionTypes.TODOLISTS.GETBYID_REQUEST
            });
    
            todolistService.getItemById(id)
            .then(
                schedule => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.GETBYID_SUCCESS, 
                        schedule 
                    });
                    resolve(schedule);
                },
                error => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.GETBYID_FAILURE, 
                        error 
                    });
                    reject();
                }
            );
        });
    };
}

function addItem(schedule) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.TODOLISTS.ADD_REQUEST 
        });

        todolistService.addSchedule(schedule)
        .then(
            res => {
                dispatch({ 
                    type: actionTypes.TODOLISTS.ADD_SUCCESS
                });
                dispatch(alertActions.success('Schedule is successfully added!'));
                
            },
            error => {
                dispatch({ 
                    type: actionTypes.TODOLISTS.ADD_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function updateItem(id, schedule) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.TODOLISTS.UPDATE_REQUEST 
        });

        todolistService.updateSchedule(id, schedule)
        .then(
            res => {
                dispatch({ 
                    type: actionTypes.TODOLISTS.UPDATE_SUCCESS,
                    id,
                    schedule
                });
                dispatch(alertActions.success('Schedule is successfully updated!'));
                
            },
            error => {
                dispatch({ 
                    type: actionTypes.TODOLISTS.UPDATE_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function deleteItem(id) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.TODOLISTS.DELETE_REQUEST 
        });

        todolistService.deleteSchedule(id)
        .then(
            todolists => {
                dispatch({ 
                    type: actionTypes.TODOLISTS.DELETE_SUCCESS,
                    todolists
                });
                dispatch(alertActions.success('Schedule is successfully deleted!'));
            },
            error => {
                dispatch({ 
                    type: actionTypes.TODOLISTS.DELETE_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}