export const actionTypes = {
    ALERT: {
        SUCCESS: 'ALERT_SUCCESS',
        ERROR: 'ALERT_ERROR',
        CLEAR: 'ALERT_CLEAR',
    },
    AUTH: {
        LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
        LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
        LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
        LOGOUT: 'USERS_LOGOUT',
    },
    USERS: {
        GETALL_REQUEST: 'USERS_GETALL_REQUEST',
        GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
        GETALL_FAILURE: 'USERS_GETALL_FAILURE',
    },
    SCHEDULES: {
        GETALL_REQUEST: 'SCHEDULES_GETALL_REQUEST',
        GETALL_SUCCESS: 'SCHEDULES_GETALL_SUCCESS',
        GETALL_FAILURE: 'SCHEDULES_GETALL_FAILURE',

        UPDATE_ORDER_BY: 'SCHEDULES_UPDATE_ORDER_BY',
        UPDATE_ORDER_DIR: 'SCHEDULES_UPDATE_ORDER_DIR',
        UPDATE_QUERY_TEXT: 'SCHEDULES_UPDATE_QUERY_TEXT'
    }
};