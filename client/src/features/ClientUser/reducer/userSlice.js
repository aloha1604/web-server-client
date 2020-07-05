import { createSlice } from '@reduxjs/toolkit';
import api from '../../../utils/api';

// Slice

const initiaUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { logged: false }

const slice = createSlice({
    name: 'user',
    initialState: {
        user: initiaUser,
    },
    reducers: {
        singInSuccess: (state, action) => {
            state.user = action.payload;
            state.user.logged = false;
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.user.logged = true;
            localStorage.setItem('user', JSON.stringify(state.user))

        },
        loginFail: (state, action) => {
            state.user = action.payload;
            state.user.logged = false;
            localStorage.setItem('user', JSON.stringify(state.user))

        },
        logoutSuccess: (state, action) => {
            state.user = { logged: false }
            localStorage.removeItem('user')
        },
    },
});

export default slice.reducer

//Actions

const { singInSuccess, loginSuccess, logoutSuccess, loginFail } = slice.actions

export const singIn = ({ email, password }) => async dispatch => {
    try {
        const res = await api.post('apiUser/userdangky', { email, password })
        console.log(res.data)
        if (res.data) {
            dispatch(singInSuccess(res.data));
        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const login = ({ email, password }) => async dispatch => {
    try {
        const res = await api.post('apiUser/userdangnhap', { email, password })
        console.log(res.data)
        if (res.data.error) {
            dispatch(loginFail(res.data));
        } else {
            dispatch(loginSuccess(res.data));
        }

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


