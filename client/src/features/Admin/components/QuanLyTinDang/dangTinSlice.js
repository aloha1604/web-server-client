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
        tinMoi: initialTinDang,
        tinDangOne: initialTinDang,
        tinChoDuyetByIdUser: initialTinDang,
        tinDaDuyetByIdUser: initialTinDang,
        tinViPhamByIdUser: initialTinDang,
        tinDangUuTienByIdNhom: initialTinDang,
        tinDangByIdNhom: initialTinDang,
        tinDangSearch: initialTinDang,

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
        getTinChoDuyetByIdUser: (state, action) => {
            state.tinChoDuyetByIdUser = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        }
        ,
        getTinDaDuyetByIdUser: (state, action) => {
            state.tinDaDuyetByIdUser = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        }
        ,
        getTinViPhamByIdUser: (state, action) => {
            state.tinViPhamByIdUser = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        }
        ,
        getTinMoi: (state, action) => {
            state.tinMoi = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        getTinDangOne: (state, action) => {
            state.tinDangOne = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        getTinDangUuTienByIdNhom: (state, action) => {
            state.tinDangUuTienByIdNhom = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        getTinDangByIdNhom: (state, action) => {
            state.tinDangByIdNhom = action.payload.dataTin;
            // toast.success("Load tin thành công !!");
        },
        getTinDangSearch: (state, action) => {
            state.tinDangSearch = action.payload.dataTin;
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
            toast.warn(" Thất bại !!!");
        }, updateTinFail: (state, action) => {
            toast.warn("Cập nhật tin tin thất bại !!");
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { getAll,
    addTin,
    updateTin,
    deleteTin,
    getAllFail,
    updateTinFail,
    updateTinViPham,
    getTinChoDuyet,
    getTinDaDuyet,
    getTinViPham,
    getTinMoi,
    getTinDangOne,
    getTinChoDuyetByIdUser,
    getTinDaDuyetByIdUser,
    getTinViPhamByIdUser,
    getTinDangUuTienByIdNhom,
    getTinDangByIdNhom,
    getTinDangSearch
} = actions;

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

export const getAllTinChoDuyetByIdUser = ({ user_id }) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/getAllTinChoDuyetByIdUser/${user_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinChoDuyetByIdUser(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinViPhamByIdUser = ({ user_id }) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/getAllTinViPhamByIdUser/${user_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinViPhamByIdUser(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinDaDuyetByIdUser = ({ user_id }) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/getAllTinDaDuyetByIdUser/${user_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinDaDuyetByIdUser(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinMoi = () => async dispatch => {
    try {
        const res = await api.get('apiDangTin/getTinMoi')
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinMoi(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinDangOne = ({ tindang_id }) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/getOneTinByIdTinDang/${tindang_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinDangOne(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinDangUuTienByIdNhom = (nhom_id) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/getTinUuTienByIdNhom/${nhom_id}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinDangUuTienByIdNhom(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinDangByIdNhom = (nhom_id, pagePer) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/getTinByIdNhom/${nhom_id}/${pagePer}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinDangByIdNhom(res.data));

        }

    } catch (e) {
        return console.error(e.message);
    }
}

export const getAllTinDangSearch = (nhom_id, tieude, tinhThanh, quanHuyen, phuongXa, page) => async dispatch => {
    try {
        const res = await api.get(`apiDangTin/searchTinDang/${nhom_id}/${tieude}/${tinhThanh}/${quanHuyen}/${phuongXa}/${page}`)
        if (!res.data) {
            dispatch(getAllFail(res.data));
        } else {
            dispatch(getTinDangSearch(res.data));

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
            dispatch(addTin(res.data));

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

export const updateTinDangUuTien = (tindang_idd) => async dispatch => {
    try {
        const res = await api.put(`apiUser/updateTinDangUuTien/${tindang_idd}`)
        if (!res.data) {
            dispatch(updateTinFail(res.data));
        } else {
            dispatch(updateTin(res.data));

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




