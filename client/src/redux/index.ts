import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './Slices/ProductsSlice/ProductsSlice';
import commentsReducer from './Slices/CommentsSlice/CommentsSlice';
import authReducer  from "./Slices/AuthSlice/AuthSlice";
import favouriteReducer from './Slices/FavouriteSlice/FavouriteSlice';
import filterReducer from './Slices/FilterSlice/FilterSlice';

export const store = configureStore({
    reducer: {
        productsReducer,
        commentsReducer,
        authReducer,
        favouriteReducer,
        filterReducer,
    },  
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;