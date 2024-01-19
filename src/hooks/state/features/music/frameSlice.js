import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
    loading: false,
    filtered: []
}

export const frameSlice = createSlice({
    name: "Frame",
    initialState,
    reducers: {
        getFrameRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
        },
        getFrame: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getFrameFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { getFrameRequest, getFrame, getFrameFailure } = frameSlice.actions;
export default frameSlice.reducer;