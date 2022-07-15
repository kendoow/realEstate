import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFilterProducts } from './FilterActionCreator';

import { IProduct } from './../ProductsSlice/ProductsSlice.types';
import { FilterStateTypes } from './FilterSlice.types';

const initialState: FilterStateTypes = {
    loading: false,
    error: null,
    filterProducts: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFilterProducts.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchFilterProducts.pending.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.filterProducts = action.payload
        },
        [fetchFilterProducts.pending.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

