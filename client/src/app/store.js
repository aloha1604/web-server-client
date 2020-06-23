// config redux
import { configureStore } from "@reduxjs/toolkit";

//some Reducer
import adminReducer from '../features/Admin/adminSlice';


//root Reducer
const rootReducer = {
    admin: adminReducer,
}

//config store
const store = configureStore({
    reducer: rootReducer,
});

export default store;
