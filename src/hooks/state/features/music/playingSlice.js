import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
    loading: false
}


export const playSlice = createSlice({
    name: "playing",
    initialState,
    reducers: {
        getPlayRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
        },
        getPlay: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getPlayFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { getPlayRequest, getPlay, getPlayFailure } = playSlice.actions;
export default playSlice.reducer;