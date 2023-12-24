import axios from 'axios';

const baseURL = "http://localhost:8000/api";
const token = localStorage.getItem("token")
// const baseURL = 'https://nafal.onrender.com/api';

const api = axios.create({
    baseURL,
});

// Set default headers
api.defaults.headers['Content-Type'] = 'application/json';
api.defaults.headers['Authorization'] = token;

// Function to handle GET requests
export const get = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error?.response?.data?.error;
    }
};
// Function to handle POST requests
export const post = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        throw error?.response?.data?.error;
    }
};

// Function to handle PATCH requests
export const patch = async (url, data) => {
    try {
        const response = await api.patch(url, data);
        return response.data;
    } catch (error) {
        throw error?.response?.data?.error;
    }
};

// Function to handle DELETE requests
export const remove = async (url, data=[]) => {
    try {
        const response = await api.delete(url, {data});
        return response.data;
    } catch (error) {
        throw error?.response?.data?.error;
    }
};
