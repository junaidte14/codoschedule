import vars from '../config/env';
import { authHeader } from '../_helpers';

export const todolistService = {
    getAll,
    getAllByAttr,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}todolists`, requestOptions).then(handleResponse);
}

function getAllByAttr(attr) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}todolists/schedule_id/${attr}`, requestOptions).then(handleResponse);
}

function getItemById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}todolists/${id}`, requestOptions).then(handleResponse);
}

function addItem(item) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(item),
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}todolists`, requestOptions).then(handleResponse);
}

function updateItem(id, item) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(item),
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}todolists/${id}`, requestOptions).then(handleResponse);
}

function deleteItem(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${vars.apiURL}todolists/${id}`, requestOptions).then(handleResponse);
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