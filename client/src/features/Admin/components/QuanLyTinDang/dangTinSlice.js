import { createSlice } from '@reduxjs/toolkit';
import api from '../../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialTinDang = [];
const slice = createSlice({
    name: 'tinDang',
    initialState: {
        tinViPham: initialTinDang,
        tinChoDuyet: initialTinDang,
        tinDaDuyet: initialTinDang,
    },
    reducers: {
        getTinViPham: (state, action) => {
            state.tinViPham = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        getTinChoDuyet: (state, action) => {
            state.tinChoDuyet = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        getTinDaDuyet: (state, action) => {
            state.tinDaDuyet = action.payload.dataTin;
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
            toast.success("Đã đưa tin vào danh sách tin bị lỗi!!");
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
export const { getAll, addTin, updateTin, deleteTin, getAllFail, updateTinFail, updateTinViPham, getTinChoDuyet, getTinDaDuyet, getTinViPham } = actions;

export const getAllTinChoDuyet = () => async dispatch => {
    try {
        const res = await api.get('apiDangTin/getAllTinChoDuyet')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinChoDuyet(res.data));

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
            dispatch(getTinViPham(res.data));

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
            dispatch(getTinDaDuyet(res.data));

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

export const updateTinDangViPham = ({ tindang_idd, lyDoViPham }) => async dispatch => {
    try {
        const res = await api.put(`apiAdmin/updateTinDangViPham/${tindang_idd}/${lyDoViPham}`)
        if (!res.data) {
            dispatch(updateTinFail(res.data));
        } else {
            dispatch(updateTinViPham(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const deleteTinDang = (tindang_id) => async dispatch => {
    try {
        const res = await api.delete(`apiAdmin/deleteTinDang/${tindang_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(deleteTin(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const deleteTinDangViPham = (tindang_id) => async dispatch => {
    try {
        const res = await api.delete(`apiAdmin/deleteTinDangViPham/${tindang_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(deleteTin(res.data));

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




