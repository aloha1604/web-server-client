import axios from "axios";

const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json'
    },
})

api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            config.headers['x-access-token'] = accessToken;
        }
        return config
    },
    error => Promise.reject(error)
)

export default api;