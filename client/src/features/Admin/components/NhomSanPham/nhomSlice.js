import { createSlice } from '@reduxjs/toolkit';
import api from '../../../../utils/api';
import { toast } from "react-toastify";
//khởi tạo sate
const initialNhom = [];
const slice = createSlice({
    name: 'nhom',
    initialState: {
        nhom: initialNhom,
    },
    reducers: {
        getAll: (state, action) => {
            state.nhom = action.payload.dataNhom;
            toast.success("Đã load thành công tất cả nhóm !!");
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
            toast.warn("Load thất bại tất cả nhóm!!!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll, add, update, remove, addFail, removeFail, updateFail, getAllFail } = actions;

export const getAllNhom = () => async dispatch => {
    try {
        const res = await api.get('apiAdmin/getAllNhom')
        if (res.data.error) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getAll(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

// export const addDanhMuc = ({ danhmuc_ten }) => async dispatch => {
//     try {
//         const res = await api.post('apiAdmin/addDanhMuc', { danhmuc_ten })
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

export const updateNhom = ({ nhom_id, nhom_ten }) => async dispatch => {
    try {
        const res = await api.put(`apiAdmin/updateNhomByIdNhom/${nhom_id}/${nhom_ten}`)
        console.log(res.data)
        if (res.data.error) {
            dispatch(updateFail(res.data));
        } else {
            dispatch(update(res.data));
        }

    } catch (e) {
        return console.error(e.message);
    }
}

// export const removeDanhMuc = ({ danhmuc_id }) => async dispatch => {
//     try {
//         const res = await api.delete(`apiAdmin/deleteDanhMuc/${danhmuc_id}`)
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