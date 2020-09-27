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

function getAllByAttr(attr, abortController) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.TODOLISTS.GETALLBYSCHEDULE_REQUEST 
        });

        todolistService.getAllByAttr(attr, abortController)
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
                todolist => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.GETBYID_SUCCESS, 
                        todolist 
                    });
                    resolve(todolist);
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

function addItem(item) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch({ 
                type: actionTypes.TODOLISTS.ADD_REQUEST 
            });

            todolistService.addItem(item)
            .then(
                res => {
                    item._id = res.data;
                    dispatch({ 
                        type: actionTypes.TODOLISTS.ADD_SUCCESS,
                        newItem: item
                    });
                    dispatch(alertActions.success('Item is successfully added!'));
                    resolve(res);
                },
                error => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.ADD_FAILURE, 
                        error 
                    });
                    dispatch(alertActions.error(error));
                    reject();
                }
            );
        });
    };
}

function updateItem(id, item) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch({ 
                type: actionTypes.TODOLISTS.UPDATE_REQUEST 
            });

            todolistService.updateItem(id, item)
            .then(
                res => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.UPDATE_SUCCESS,
                        id,
                        todolist: item
                    });
                    dispatch(alertActions.success('Item is successfully updated!'));
                    resolve(res);
                },
                error => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.UPDATE_FAILURE, 
                        error 
                    });
                    dispatch(alertActions.error(error));
                    reject();
                }
            );
        });
    };
}

function deleteItem(id) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch({ 
                type: actionTypes.TODOLISTS.DELETE_REQUEST 
            });

            todolistService.deleteItem(id)
            .then(
                res => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.DELETE_SUCCESS,
                        id
                    });
                    dispatch(alertActions.success('Item is successfully deleted!'));
                    resolve(res);
                },
                error => {
                    dispatch({ 
                        type: actionTypes.TODOLISTS.DELETE_FAILURE, 
                        error 
                    });
                    dispatch(alertActions.error(error));
                    reject();
                }
            );
        });
    };
}