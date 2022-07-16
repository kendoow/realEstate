import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct } from './../ProductsSlice/ProductsSlice.types';
import { IFilter } from './FilterSlice.types';

import { API_URL } from '../../../http/http';


export const fetchFilterProducts = createAsyncThunk(
    '/filter',
    async (productFilter: IFilter, { rejectWithValue }) => {
        try {
            const response = await axios.get<IProduct[]>(`${API_URL}filter`, {
                params: productFilter,
            })
            return response.data
        } catch (e) {
            rejectWithValue(`Error Fetch Filter - ${e}`)
        }
    }
)