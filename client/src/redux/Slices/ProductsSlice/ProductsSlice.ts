import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProduct, fetchProductsAll, fetchProductsPagination } from "./ProductsActionCreator";

import { IProduct, ProductStateTypes, RecommenededTypes } from './ProductsSlice.types';

const initialState: ProductStateTypes = {
    loading: false,
    error: null,
    products: [],
    recentProducts: [],
    selectedProduct: {} as IProduct
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchRecentProducts(state, action: PayloadAction<RecommenededTypes>) {
            const shuffleProducts: IProduct[] = JSON.parse(JSON.stringify(state.products)) // глубокая копия чтобы не
                                                                                           // изменять products
            const {id, page, limit} = action.payload
            state.recentProducts = shuffleProducts.filter((i) => i._id !== id)
                                                       .slice(0, page * limit)
                                                       .sort(() => Math.random() - 0.5)
        }
    },
    extraReducers: {
        [fetchProductsAll.pending.type]: (state) => {
            state.loading = true
        },
        [fetchProductsAll.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.products = action.payload
        },
        [fetchProductsAll.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [fetchProductsPagination.pending.type]: (state) => {
            state.loading = true
        },
        [fetchProductsPagination.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.products = action.payload
        },
        [fetchProductsPagination.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        
        [fetchProduct.pending.type]: (state) => {
            state.loading = true
        },
        [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
            state.loading = false
            state.selectedProduct = action.payload
        },
        [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



const { actions, reducer } = ProductsSlice;

export const { fetchRecentProducts } = actions
export default reducer;