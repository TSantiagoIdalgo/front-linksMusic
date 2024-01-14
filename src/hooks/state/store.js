import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/music/musicSlice";
import playReducer from "./features/music/playingSlice";
import urlResolver from "./features/music/urlSlice";

export const store = configureStore({
    reducer: {
        music: productsReducer,
        play: playReducer,
        url: urlResolver,
    }
})