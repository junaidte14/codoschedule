import vars from '../config/env';
import { authHeader } from '../_helpers';

export const scheduleService = {
    getAll,
    getItemById,
    addSchedule,
    updateSchedule,
    deleteSchedule
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}schedules`, requestOptions).then(handleResponse);
}

function getItemById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}schedules/${id}`, requestOptions).then(handleResponse);
}

function addSchedule(schedule) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(schedule),
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}schedules`, requestOptions).then(handleResponse);
}

function updateSchedule(id, schedule) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(schedule),
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}schedules/${id}`, requestOptions).then(handleResponse);
}

function deleteSchedule(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}schedules/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}