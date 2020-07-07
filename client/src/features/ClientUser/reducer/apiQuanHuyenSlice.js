import { createSlice } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialQuanHuyen = [];
const slice = createSlice({
    name: 'quanHuyen',
    initialState: {
        quanHuyen: initialQuanHuyen,
    },
    reducers: {
        getAll: (state, action) => {
            state.quanHuyen = action.payload.data;
            // toast.success("Đã load thành công Tỉnh Thànhtất cả nhóm !!");
        },
        getAllFail: (state, action) => {
            toast.warn("Load thất bại Quận huyện tất cả !!!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll, getAllFail } = actions;

export const getAllQuanHuyen = () => async dispatch => {
    try {
        const res = await api.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}


