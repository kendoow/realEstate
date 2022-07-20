import { IProduct } from './../ProductsSlice/ProductsSlice.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FavouriteStateTypes } from './FavouriteSlice.types';

import { fetchFavourite, addFavourite, deleteFavourite } from './FavouriteActionCreator';

const initialState: FavouriteStateTypes = {
    loading: false,
    error: null,
    favourite: [],
}

export const FavouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        removeFavourite: (state) => {
            state.favourite = []
        },
    },
    extraReducers: {
        [fetchFavourite.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.favourite = action.payload
        },
        [fetchFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [addFavourite.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [addFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.favourite = action.payload
        },
        [addFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [deleteFavourite.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [deleteFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.favourite = action.payload
            state.error = null
        },
        [deleteFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

const { actions, reducer } = FavouriteSlice

export const { removeFavourite } = actions;
export default reducer;