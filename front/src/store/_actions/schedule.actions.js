import { actionTypes } from '../action.types';
import { scheduleService } from '../../_services';

export const scheduleActions = {
    getAll,
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

function updateOrderBy(orderBy) {
    return { type: actionTypes.SCHEDULES.UPDATE_ORDER_BY, orderBy};
}

function updateOrderDir(orderDir) {
    return { type: actionTypes.SCHEDULES.UPDATE_ORDER_DIR, orderDir};
}

function updateQueryText(queryText) {
    return { type: actionTypes.SCHEDULES.UPDATE_QUERY_TEXT, queryText};
}