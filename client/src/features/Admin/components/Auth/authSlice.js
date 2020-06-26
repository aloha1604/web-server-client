import { createSlice } from '@reduxjs/toolkit'
import api from '../../../../utils/api'

// Slice

const initiaAdmin = localStorage.getItem('admin')
    ? JSON.parse(localStorage.getItem('admin'))
    : null

const slice = createSlice({
    name: 'admin',
    initialState: {
        admin: initiaAdmin,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.admin = action.payload;

            localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            localStorage.removeItem('admin')
        },
    },
});

export default slice.reducer

//Actions

const { loginSuccess, logoutSuccess } = slice.actions

export const login = ({ username, password }) => async dispatch => {
    try {
        const res = await api.post('test/admindangnhap', { username, password })
        console.log(res);
        dispatch(loginSuccess(res));
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


