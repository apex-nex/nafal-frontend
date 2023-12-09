import axios from 'axios';

const baseURL = "http://localhost:8000/api";
// const baseURL = 'https://nafal.onrender.com/api';

const api = axios.create({
    baseURL,
});

// Set the content type for POST and PUT requests
// api.defaults.headers['Content-Type'] = 'application/json';

// Function to handle GET requests
export const get = async (url, params = {}) => {
    try {
        const response = await api.get(url, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to handle POST requests
export const post = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to handle PUT requests
export const put = async (url, data) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to handle DELETE requests
export const remove = async (url, data) => {
    try {
        const response = await api.delete(url, {data});
        return response.data;
    } catch (error) {
        throw error;
    }
};
