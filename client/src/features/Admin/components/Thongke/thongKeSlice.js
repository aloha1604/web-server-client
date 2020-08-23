import { createSlice } from '@reduxjs/toolkit';
import api from '../../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialThongKe = [];
const slice = createSlice({
    name: 'thongKe',
    initialState: {
        thongKe: initialThongKe,
    },
    reducers: {
        getAll: (state, action) => {
            state.thongKe = action.payload.thongKe;
            // toast.success("Đã load thành công tất cả nhóm !!");
        },
        getAllFail: (state, action) => {
            toast.warn("Load thất bại thống kê admin !!!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll, getAllFail } = actions;

export const getAllThongKe = () => async dispatch => {
    try {
        const res = await api.get('apiAdmin/thongKeAdmin')
        if (res.data.error) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

