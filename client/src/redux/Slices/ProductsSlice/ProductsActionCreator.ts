
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../../http/http";

import { IProduct } from "./ProductsSlice.types";

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get<IProduct[]>(`${API_URL}product`)
            return response.data 
        } catch (e) {
            return rejectWithValue("Не удалось загрузить Апартаменты")
        }
       
    }
) 

export const fetchProduct = createAsyncThunk(
    'products/fetchOne',
    async (id:string, {rejectWithValue}) => {

        try {
            const response = await axios.get<IProduct>(`${API_URL}product/${id}`)
            return response.data 
        } catch (error) {
            return rejectWithValue("Не удалось загрузить страницу")
        }
       
    }
) 