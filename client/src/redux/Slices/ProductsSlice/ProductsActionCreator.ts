import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IProduct } from "./ProductsSlice.types";

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IProduct[]>('http://localhost:8000/product')
        return response.data 
    }
) 