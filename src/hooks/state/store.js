import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/music/musicSlice";
import playReducer from "./features/music/playingSlice";

export const store = configureStore({
    reducer: {
        music: productsReducer,
        play: playReducer
    }
})