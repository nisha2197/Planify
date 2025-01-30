import React from 'react'
import api from '../Environment/environment';

const apiService = async (endpoint, method, body = null) => {
    const token = localStorage.getItem('auth_token');

    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `${token}`;
    }

    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${api}/${endpoint}`, options);
    return response.json();
}

export default apiService
