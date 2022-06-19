import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './Slices/ProductsSlice/ProductsSlice';
import commentsReducer from './Slices/CommentsSlice/CommentsSlice';

export const store = configureStore({
    reducer: {
        productsReducer,
        commentsReducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;