import { createSlice } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { toast } from "react-toastify";

// Slice

const initiaState = []

const slice = createSlice({
    name: 'dongRao',
    initialState: {
        tinDangMienPhiAndDongRao: initiaState
    },
    reducers: {
        getDongRaoAndTinMienPhiSuccess: (state, action) => {
            // state.tinDangMienPhiAndDongRao = action.payload.data;
            localStorage.setItem('dongRao', JSON.stringify(action.payload.data))
        }
    },
});

export default slice.reducer

//Actions

const { getDongRaoAndTinMienPhiSuccess } = slice.actions


export const getCountTinMienPhiAndDongRao = ({ user_id }) => async dispatch => {
    try {
        const res = await api.get(`apiUser/getCountTinMienPhiAndDongRao/${user_id}`)

        if (res.data) {
            dispatch(getDongRaoAndTinMienPhiSuccess(res.data));
        }
    } catch (e) {
        return console.error(e.message);
    }
}



