import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/music/musicSlice";
import playReducer from "./features/music/playingSlice";
import urlResolver from "./features/music/urlSlice";
import frameSlice from "./features/music/frameSlice";

export const store = configureStore({
    reducer: {
        music: productsReducer,
        play: playReducer,
        url: urlResolver,
        frame: frameSlice,
    }
})