// config redux
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

//some Reducer
import adminAuth from '../features/Admin/components/Auth/authSlice';
import userAuth from '../features/ClientUser/reducer/userSlice';




//root Reducer
const rootReducer = combineReducers({
    adminAuth, userAuth
})

//config store
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
