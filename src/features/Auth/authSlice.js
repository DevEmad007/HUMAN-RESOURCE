import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: 'nll',
    photoURL: null,
    displayName: null,
    email: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUpdate: (state,action) => {
            state.userId = action.payload?.uid;
            state.photoURL = action.payload?.photoURL;
            state.displayName = action.payload?.displayName;
            state.email = action.payload?.email;
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