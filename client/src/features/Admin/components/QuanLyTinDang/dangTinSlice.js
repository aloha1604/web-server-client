import { createSlice } from '@reduxjs/toolkit';
import api from '../../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialTinDang = [];
const slice = createSlice({
    name: 'tinDang',
    initialState: {
        tinDang: initialTinDang,
    },
    reducers: {
        getAll: (state, action) => {
            state.tinDang = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        addTin: (state, action) => {
            state.tinDang = action.payload.dataTin;
            toast.success("Thêm tin thành công !!");
        },
        updateTin: (state, action) => {
            toast.success("Đã update tin thành công !!");
        },
        updateTinViPham: (state, action) => {
            toast.warn("Đã đưa tin vào danh sách tin bị lỗi!!");
        }
        ,
        deleteTin: (state, action) => {
            state.tinDang = action.payload.dataTin;
            toast.success("Xóa tin Thành công !!");
        },
        getAllFail: (state, action) => {
            toast.warn("Load Tin thất bại !!!");
        }, updateTinFail: (state, action) => {
            toast.warn("Cập nhật tin tin thất bại !!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll, addTin, updateTin, deleteTin, getAllFail, updateTinFail, updateTinViPham } = actions;

export const getAllTinChoDuyet = () => async dispatch => {
    try {
        const res = await api.get('apiDangTin/getAllTinChoDuyet')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinViPham = () => async dispatch => {
    try {
        const res = await api.get('apiDangTin/getAllTinViPham')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinDaDuyet = () => async dispatch => {
    try {
        const res = await api.get('apiDangTin/getAllTinDaDuyet')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const addTinDang = (value) => async dispatch => {
    try {
        const res = await api.post('apiUser/dangtin', value)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const updateTinDangActive = (tindang_idd) => async dispatch => {
    try {
        const res = await api.put(`apiAdmin/updateTinDangActive/${tindang_idd}`)
        if (!res.data) {
            dispatch(updateTinFail(res.data));
        } else {
            dispatch(updateTin(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const updateTinDangViPham = (tindang_idd) => async dispatch => {
    try {
        const res = await api.put(`apiAdmin/updateTinDangViPham/${tindang_idd}`)
        if (!res.data) {
            dispatch(updateTinFail(res.data));
        } else {
            dispatch(updateTinViPham(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

// export const updateTinDang = () => async dispatch => {
//     try {
//         const res = await api.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward')
//         if (!res.data) {
//             dispatch(getAllFail(res.data));
//         } else {
//             dispatch(getAll(res.data));

//         }

//     } catch (e) {
//         return console.error(e.message);
//     }
// }




