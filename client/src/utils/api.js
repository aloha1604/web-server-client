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
        const user = JSON.parse(localStorage.getItem('user'));
        if (admin) {
            config.headers['x-access-token'] = admin.accessToken;

        }
        if (user) {
            config.headers['y-access-token'] = user.accessToken;
        }
        return config
    },
    error => Promise.reject(error)
)

export default api;