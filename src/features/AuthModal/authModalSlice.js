import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
};

export const authModalSlice = createSlice(
    {
        name: 'authModal',
        initialState,
        reducers: {
            showAuthModal: (state,action) => {
                state.show = true;
            },
            hideAuthModal: (state,action) => {
                state.show = false;
            }
        },
        extraReducers: (builder) => {

        }
    }
);


export const { showAuthModal,hideAuthModal } = authModalSlice.actions;

export default authModalSlice.reducer;