import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    isLoading: true
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUpdate: (state,action) => {
            state.userId = action.payload?.uid;
        },
        signIn: (state,action) => {
            state.userId = action.payload?.uid;
        },
        signout: (state,action) => {
            state.userId = action.payload?.uid;
        }
    },
    extraReducers: {}
});
// Action creators are generated for each case reducer function
export const { authUpdate,signIn,signout } = authSlice.actions;

export default authSlice.reducer;