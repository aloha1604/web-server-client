// config redux
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

//some Reducer
import adminAuth from '../features/Admin/components/Auth/authSlice';



//root Reducer
// const rootReducer = {
//     admin: adminReducer,
// }

const rootReducer = combineReducers({
    adminAuth
})

//config store
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
