import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './Slices/ProductsSlice/ProductsSlice';


export const store = configureStore({
    reducer: {
        productsReducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;