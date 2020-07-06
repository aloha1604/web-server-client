import { createSlice } from '@reduxjs/toolkit';
//khởi tạo sate
const initialDanhMuc = [];

const slice = createSlice({
    name: 'admin',
    initialState: {
        danhMuc: initialDanhMuc,
    },
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            console.log(action.payload);
            // const removeId = action.payload;
            // return state.filter(photo => photo.id !== removePhotoId);
        },
        update: (state, action) => {
            const newAdmin = action.payload;

        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = slice;
export default reducer;
//lấy ra các action
export const { add, update, remove } = actions;
