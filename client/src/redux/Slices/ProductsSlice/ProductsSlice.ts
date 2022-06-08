import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "./ProductsActionCreator";

import { IProduct, ProductStateTypes } from './ProductsSlice.types';

const initialState: ProductStateTypes = {
    loading: false,
    error: null,
    products: [],
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending.type]: (state) => {
            state.loading = true
        },
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.products = action.payload
        },
        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default ProductsSlice.reducer