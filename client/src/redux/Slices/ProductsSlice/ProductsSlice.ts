import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProduct, fetchProducts } from "./ProductsActionCreator";

import { IProduct, ProductStateTypes } from './ProductsSlice.types';

const initialState: ProductStateTypes = {
    loading: false,
    error: null,
    products: [],
    selectedApartament: {} as IProduct
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {  },
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
        },
        
        [fetchProduct.pending.type]: (state) => {
            state.loading = true
        },
        [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
            state.loading = false
            state.selectedApartament = action.payload
        },
        [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



const { actions, reducer } = ProductsSlice;

export default reducer;
export const {} = actions;