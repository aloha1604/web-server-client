// config redux
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

//some Reducer
import adminReducer from '../features/Admin/adminSlice';


//root Reducer
// const rootReducer = {
//     admin: adminReducer,
// }

const rootReducer = combineReducers({
    adminReducer
})

//config store
const store = configureStore({
    reducer: rootReducer,
});

export default store;
