import { createSlice } from '@reduxjs/toolkit'
import api from '../../../../utils/api'

// Slice

const initiaAdmin = localStorage.getItem('admin')
    ? JSON.parse(localStorage.getItem('admin'))
    : { logged: false }

const slice = createSlice({
    name: 'admin',
    initialState: {
        admin: initiaAdmin,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.admin = action.payload;
            state.admin.logged = true;
            localStorage.setItem('admin', JSON.stringify(action.payload))
        },
        logoutSuccess: (state, action) => {
            state.admin = { logged: false }
            localStorage.removeItem('admin')
        },
    },
});

export default slice.reducer

//Actions

const { loginSuccess, logoutSuccess } = slice.actions

export const login = ({ username, password }) => async dispatch => {
    try {
        const res = await api.post('apiAdmin/admindangnhap', { username, password })

        dispatch(loginSuccess(res.data));
    } catch (e) {
        return console.error(e.message);
    }
}

export const logout = () => async dispatch => {
    try {
        // await api.post('/api/auth/logout/')
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}


