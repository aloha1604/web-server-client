import { createSlice } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { toast } from "react-toastify";

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
            toast.success(action.payload.message);
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.user.logged = true;
            toast.success("Đăng nhập thành công!!");
            localStorage.setItem('user', JSON.stringify(state.user))

        },
        resetPassword: (state, action) => {
            toast.success("Đã reset Password vui lòng check mai!!");
        },
        resetPasswordFail: (state, action) => {
            toast.warn(action.payload.error);
        },
        loginFail: (state, action) => {
            state.user = action.payload;
            state.user.logged = false;
            toast.warn(action.payload.error);
            localStorage.setItem('user', JSON.stringify(state.user))

        },
        singInFail: (state, action) => {
            state.user = action.payload;
            state.user.logged = false;
            toast.warn(action.payload.error);
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        logoutSuccess: (state, action) => {
            state.user = { logged: false }
            toast.success('Đã đăng xuất tài khoản !!');
            localStorage.removeItem('user')
        },
    },
});

export default slice.reducer

//Actions

const { singInSuccess, loginSuccess, logoutSuccess, loginFail, singInFail, resetPassword, resetPasswordFail, } = slice.actions

export const singIn = ({ email, password }) => async dispatch => {
    try {
        const res = await api.post('apiUser/userdangky', { email, password })

        if (res.data.message) {
            dispatch(singInSuccess(res.data));
        } else {
            dispatch(singInFail(res.data));
        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const login = ({ email, password }) => async dispatch => {
    try {
        const res = await api.post('apiUser/userdangnhap', { email, password })

        if (res.data.error) {
            dispatch(loginFail(res.data));
        } else {
            dispatch(loginSuccess(res.data));
        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const resetPasswordUser = ({ email }) => async dispatch => {
    try {
        const res = await api.post('apiUser/userResetPassword', { email })

        if (res.data.error) {
            dispatch(resetPasswordFail(res.data));
        } else {
            dispatch(resetPassword(res.data));
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





