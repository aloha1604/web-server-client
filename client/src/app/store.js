// config redux
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

//some Reducer
import adminAuth from '../features/Admin/components/Auth/authSlice';
import danhMuc from '../features/Admin/components/DanhMucSanPham/danhMucSlice';
import userAuth from '../features/ClientUser/reducer/userSlice';




//root Reducer
const rootReducer = combineReducers({
    adminAuth, danhMuc, userAuth,
})

//config store
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
