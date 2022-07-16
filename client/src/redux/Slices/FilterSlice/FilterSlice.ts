import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFilterProducts } from './FilterActionCreator';

import { IProduct } from './../ProductsSlice/ProductsSlice.types';
import { FilterStateTypes, IFilter } from './FilterSlice.types';

const initialState: FilterStateTypes = {
    loading: false,
    error: null,
    filterProducts: [],
    selectedFilters: {},
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addSelectedFilters: (state, action: PayloadAction<IFilter>) => {
            state.selectedFilters = {...state.selectedFilters, ...action.payload}
        }
    },
    extraReducers: {
        [fetchFilterProducts.pending.type]: (state) => {
            state.loading = true
            state.error = null
            // state.selectedFilters = {} 
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

const { actions, reducer } = filterSlice

export const { addSelectedFilters } = actions;
export default reducer;