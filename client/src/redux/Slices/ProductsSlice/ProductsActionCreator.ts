import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../../http/http";

import { IProduct } from "./ProductsSlice.types";

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IProduct[]>(`${API_URL}product`)
        return response.data 
    }
) 