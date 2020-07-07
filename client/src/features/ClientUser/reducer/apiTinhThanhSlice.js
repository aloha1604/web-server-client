import { createSlice } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialTinhThanh = [];
const slice = createSlice({
    name: 'tinhThanh',
    initialState: {
        tinhThanh: initialTinhThanh,
    },
    reducers: {
        getAll: (state, action) => {
            state.tinhThanh = action.payload.data;
            // toast.success("Đã load thành công Tỉnh Thànhtất cả nhóm !!");
        },
        getAllFail: (state, action) => {
            toast.warn("Load thất bại Tỉnh thành tất cả nhóm!!!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll, getAllFail } = actions;

export const getAllTinhThanh = () => async dispatch => {
    try {
        const res = await api.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}


