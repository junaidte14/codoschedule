import { actionTypes } from '../action.types';
import { alertActions } from './';
import { scheduleService } from '../../_services';

export const scheduleActions = {
    getAll,
    getItemById,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    updateOrderBy,
    updateOrderDir,
    updateQueryText
};

function getAll() {
    return dispatch => {
        dispatch({ 
            type: actionTypes.SCHEDULES.GETALL_REQUEST 
        });

        scheduleService.getAll()
        .then(
            schedules => dispatch({ 
                type: actionTypes.SCHEDULES.GETALL_SUCCESS, 
                schedules 
            }),
            error => dispatch({ 
                type: actionTypes.SCHEDULES.GETALL_FAILURE, 
                error 
            })
        );
    };
}

function getItemById(id) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch({ 
                type: actionTypes.SCHEDULES.GETBYID_REQUEST
            });
    
            scheduleService.getItemById(id)
            .then(
                schedule => {
                    dispatch({ 
                        type: actionTypes.SCHEDULES.GETBYID_SUCCESS, 
                        schedule 
                    });
                    resolve(schedule);
                },
                error => {
                    dispatch({ 
                        type: actionTypes.SCHEDULES.GETBYID_FAILURE, 
                        error 
                    });
                    reject();
                }
            );
        });
    };
}

function addSchedule(schedule) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.SCHEDULES.ADD_REQUEST 
        });

        scheduleService.addSchedule(schedule)
        .then(
            res => {
                dispatch({ 
                    type: actionTypes.SCHEDULES.ADD_SUCCESS
                });
                dispatch(alertActions.success('Schedule is successfully added!'));
                
            },
            error => {
                dispatch({ 
                    type: actionTypes.SCHEDULES.ADD_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function updateSchedule(id, schedule) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.SCHEDULES.UPDATE_REQUEST 
        });

        scheduleService.updateSchedule(id, schedule)
        .then(
            res => {
                dispatch({ 
                    type: actionTypes.SCHEDULES.UPDATE_SUCCESS,
                    id,
                    schedule
                });
                dispatch(alertActions.success('Schedule is successfully updated!'));
                
            },
            error => {
                dispatch({ 
                    type: actionTypes.SCHEDULES.UPDATE_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function deleteSchedule(id) {
    return dispatch => {
        dispatch({ 
            type: actionTypes.SCHEDULES.DELETE_REQUEST 
        });

        scheduleService.deleteSchedule(id)
        .then(
            schedules => {
                dispatch({ 
                    type: actionTypes.SCHEDULES.DELETE_SUCCESS,
                    schedules
                });
                dispatch(alertActions.success('Schedule is successfully deleted!'));
            },
            error => {
                dispatch({ 
                    type: actionTypes.SCHEDULES.DELETE_FAILURE, 
                    error 
                });
                dispatch(alertActions.error(error));
            }
        );
    };
}

function updateOrderBy(orderBy) {
    return { type: actionTypes.SCHEDULES.UPDATE_ORDER_BY, orderBy};
}

function updateOrderDir(orderDir) {
    return { type: actionTypes.SCHEDULES.UPDATE_ORDER_DIR, orderDir};
}

function updateQueryText(queryText) {
    return { type: actionTypes.SCHEDULES.UPDATE_QUERY_TEXT, queryText};
}