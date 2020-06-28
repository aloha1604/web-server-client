import axios from "axios";

const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json'
    },
})

api.interceptors.request.use(
    config => {
        const admin = JSON.parse(localStorage.getItem('admin'))
        if (admin) {
            config.headers['x-access-token'] = admin.accessToken;
        }
        return config
    },
    error => Promise.reject(error)
)

export default api;