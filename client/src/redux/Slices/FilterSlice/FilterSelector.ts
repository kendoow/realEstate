// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../../index';

// const filterProducts = (state: RootState) => state.filterReducer.filterProducts
// const products = (state: RootState) => state.productsReducer.products
// const selectedFilters = (state: RootState) => state.filterReducer.selectedFilters

export const filterSelector = (state: RootState) => state.filterReducer

// export const filterProductSelector = createSelector(
//     [filterProducts, products, selectedFilters],
//     (filterProducts, products, selectedFilters) => {
//         if (Object.keys(selectedFilters).length) return filterProducts
//         else return products 
//     }
// )