import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../store/authSlice';
import jobSlice from '../store/jobSlice';

const store = configureStore({
    reducer:{
        auth: authSlice,
        job: jobSlice
    }
})

export default store;