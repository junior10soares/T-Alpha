import axios from "axios";

export const axiosBaseUrl = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosBaseUrl.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
