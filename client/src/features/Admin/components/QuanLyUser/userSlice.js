import { createSlice } from '@reduxjs/toolkit';
import api from '../../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialQlUser = [];
const slice = createSlice({
    name: 'user',
    initialState: {
        user: initialQlUser,
    },
    reducers: {
        getAll: (state, action) => {
            state.user = action.payload.dataUser;
            toast.success("Đã load user đã active thành công !!");
        },
        getAllChuaActive: (state, action) => {
            state.user = action.payload.dataUser;
            toast.success("Đã load user chưa active thành công !!");
        },
        getAllViPham: (state, action) => {
            state.user = action.payload.dataUser;
            toast.success("Đã load user Vi phạm thành công !!");
        },
        add: (state, action) => {
            toast.success(action.payload.message);
        },
        remove: (state, action) => {
            toast.success(action.payload.message);
        },
        update: (state, action) => {
            // const newAdmin = action.payload;
            toast.success(action.payload.message);

        },
        addFail: (state, action) => {
            toast.warn(action.payload.error);
        },
        removeFail: (state, action) => {
            toast.warn(action.payload.error);
        },
        updateFail: (state, action) => {
            toast.warn(action.payload.error);

        },
        getAllFail: (state, action) => {
            toast.warn("Load user đã active thất bại!!!");
        },
        getAllChuaActiveFail: (state, action) => {
            state.user = action.payload.dataUser;
            toast.success("Đã load user chưa active thất bại !!");
        },
        getAllViPhamFail: (state, action) => {
            state.user = action.payload.dataUser;
            toast.success("Đã load user vi phạm thất bại !!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll, add, update, remove, addFail, removeFail, updateFail, getAllFail, getAllChuaActiveFail, getAllChuaActive, getAllViPham, getAllViPhamFail } = actions;

export const getAllUser = () => async dispatch => {
    try {
        const res = await api.get('apiAdmin/getAllUser')
        if (res.data.error) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllUserChuaActive = () => async dispatch => {
    try {
        const res = await api.get('apiAdmin/getAllUserChuaActive')
        if (res.data.error) {
            dispatch(getAllChuaActiveFail(res.data));
        } else {
            dispatch(getAllChuaActive(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}
export const getAllUserViPham = () => async dispatch => {
    try {
        const res = await api.get('apiAdmin/getAllUserViPham')
        if (res.data.error) {
            dispatch(getAllViPhamFail(res.data));
        } else {
            dispatch(getAllViPham(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

// export const addNhom = ({ danhmuc_id, nhom_ten }) => async dispatch => {
//     try {
//         const res = await api.post('apiAdmin/addNhomByIdDanhMuc', { danhmuc_id, nhom_ten })
//         console.log(res.data)
//         if (res.data.error) {
//             dispatch(addFail(res.data));
//         } else {
//             dispatch(add(res.data));
//         }

//     } catch (e) {
//         return console.error(e.message);
//     }
// }

// export const updateNhom = ({ nhom_id, nhom_ten }) => async dispatch => {
//     try {
//         const res = await api.put(`apiAdmin/updateNhomByIdNhom/${nhom_id}/${nhom_ten}`)
//         console.log(res.data)
//         if (res.data.error) {
//             dispatch(updateFail(res.data));
//         } else {
//             dispatch(update(res.data));
//         }

//     } catch (e) {
//         return console.error(e.message);
//     }
// }

// export const removeNhom = ({ nhom_id }) => async dispatch => {
//     try {
//         const res = await api.delete(`apiAdmin/deleteNhomByIdNhom/${nhom_id}`)
//         console.log(res.data)
//         if (res.data.error) {
//             dispatch(removeFail(res.data));
//         } else {
//             dispatch(remove(res.data));
//         }

//     } catch (e) {
//         return console.error(e.message);
//     }
// }