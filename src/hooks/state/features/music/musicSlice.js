import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
    loading: false,
    filtered: []
}

export const musicSlice = createSlice({
    name: "Music",
    initialState,
    reducers: {
        getMusicRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
        },
        getMusic: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getMusicFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setFiltered: (state, action) => {
            return { ...state, filtered: action.payload }
        }
    }
})

export const { getMusicRequest, getMusic, getMusicFailure, setFiltered } = musicSlice.actions;
export default musicSlice.reducer;