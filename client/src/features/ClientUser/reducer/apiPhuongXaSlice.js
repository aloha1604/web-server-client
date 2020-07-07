import { createSlice } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialPhuongXa = [];
const slice = createSlice({
    name: 'phuongXa',
    initialState: {
        phuongXa: initialPhuongXa,
    },
    reducers: {
        getAll: (state, action) => {
            state.phuongXa = action.payload.data;
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

export const getAllPhuongXa = () => async dispatch => {
    try {
        const res = await api.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}


