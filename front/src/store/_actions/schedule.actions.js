import { scheduleConstants } from '../../_constants';
import { scheduleService } from '../../_services';

export const scheduleActions = {
    getAll,
    updateOrderBy,
    updateOrderDir
};

function getAll() {
    return dispatch => {
        dispatch(request());

        scheduleService.getAll()
        .then(
            schedules => dispatch(success(schedules)),
            error => dispatch(failure(error))
        );
    };

    function request() { return { type: scheduleConstants.GETALL_REQUEST } }
    function success(schedules) { return { type: scheduleConstants.GETALL_SUCCESS, schedules } }
    function failure(error) { return { type: scheduleConstants.GETALL_FAILURE, error } }
}

function updateOrderBy(orderBy) {
    return { type: scheduleConstants.UPDATE_ORDERBY, orderBy};
}

function updateOrderDir(orderDir) {
    return { type: scheduleConstants.UPDATE_ORDERDIR, orderDir};
}