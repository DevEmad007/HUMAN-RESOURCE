import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userSignedIn: false
};

export const adminAuthSllice = createSlice(
    {
        name: 'admin',
        initialState,
        reducers: {
            signIn: (state,action) => {
                console.log(state);
            }
        },
        extraReducers: {}
    }
);

export const { signIn } = adminAuthSllice.actions;

export default adminAuthSllice.reducer;