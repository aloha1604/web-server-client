import axios from "axios";

const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data'

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
        config.headers['token'] = '80958562-c5a3-11ea-8d4d-9203c105b02e';
        return config
    },
    error => Promise.reject(error)
)

export default api;