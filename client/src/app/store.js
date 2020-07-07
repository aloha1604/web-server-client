// config redux
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

//some Reducer admin
import adminAuth from '../features/Admin/components/Auth/authSlice';
import danhMuc from '../features/Admin/components/DanhMucSanPham/danhMucSlice';
import nhom from '../features/Admin/components/NhomSanPham/nhomSlice';
import user from '../features/Admin/components/QuanLyUser/userSlice';

//some Reducer client
import userAuth from '../features/ClientUser/reducer/userSlice';


//root Reducer
const rootReducer = combineReducers({
    adminAuth, danhMuc, nhom, user, userAuth,
})

//config store
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
