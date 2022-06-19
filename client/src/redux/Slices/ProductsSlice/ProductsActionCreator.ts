
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../../http/http";

import { IProduct, PaginationTypes } from "./ProductsSlice.types";

export const fetchProductsAll = createAsyncThunk(
    'products/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get<IProduct[]>(`${API_URL}product`)
            return response.data
        } catch (e) {
            return rejectWithValue(`Не удалось загрузить Апартаменты - ${e}`)   
        }
    }
)

export const fetchProductsPagination = createAsyncThunk(
    'products/fetchPagination',
    async (pagination: PaginationTypes, {rejectWithValue}) => {
        try {
            const { page, limit } = pagination

            const response = await axios.get<IProduct[]>(`${API_URL}product`, {params: {
                page,
                limit
            }})

            return response.data 
        } catch (e) {
            return rejectWithValue(`Не удалось загрузить Апартаменты Пагинация - ${e}`)
        }
       
    }
) 

export const fetchProduct = createAsyncThunk(
    'products/fetchOne',
    async (id: string, {rejectWithValue}) => {

        try {
            const response = await axios.get<IProduct>(`${API_URL}product/${id}`)
            return response.data 
        } catch (e) {
            return rejectWithValue(`Не удалось загрузить страницу апартаментов - ${e}`)
        }
       
    }
) 