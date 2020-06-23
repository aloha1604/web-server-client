import { createSlice } from '@reduxjs/toolkit';

//khởi tạo 1 state để quản lý admin
const initialAdmin = [];


// createSlice tạo sẳn reducer và action
const admin = createSlice({
    name: 'admins',
    initialState: initialAdmin,
    reducer: {
        addAdmin: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            console.log(action.payload);
            // const removeId = action.payload;
            // return state.filter(photo => photo.id !== removePhotoId);
        },
        update: (state, action) => {
            const newAdmin = action.payload;
            // const adminInex = state.findIndex(admin => {
            //     return admin.id = newAdmin.Id;
            // })
            // if (adminIndex >= 0) {
            //     state[adminIndex] = newAdmin;
            // }
        }

    }
})

//lấy reducer và action từ admin
const { reducer, actions } = admin;

//lấy ra các action
export const { addAdmin, remove, update } = actions;


export default reducer;