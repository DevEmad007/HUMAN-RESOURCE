import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Auth/authSlice';
import authModalSlice from './features/AuthModal/authModalSlice';


export const store = configureStore({
    reducer: {
        authModal: authModalSlice,
        auth: authReducer,
    },
});