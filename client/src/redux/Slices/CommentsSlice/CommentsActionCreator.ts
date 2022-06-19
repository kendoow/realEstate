import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';
import { API_URL } from './../../../http/http';

import { PaginationCommentsTypes, IComment } from './CommentsSlice.types';


export const fetchComments = createAsyncThunk(
    'comments/fetch',
    async (pagination: PaginationCommentsTypes, {rejectWithValue}) => {
        try {
            const {id, page, limit} = pagination
            const response = await axios.get<IComment[]>(`${API_URL}comment/${id}`, {params: {page, limit}})
            return response.data
        } catch (e) {
            return rejectWithValue(`Не удалось загрузить отзывы - ${e}`)
        }
    }
)

export const fetchCommentsFirst = createAsyncThunk(
    'commets/fetchFisrt',
    async (id: string, {rejectWithValue}) => {
        try {
            const response = await axios.get<IComment[]>(`${API_URL}comment/${id}`, {params: {page: 1, limit: 4}})
            return response.data
        } catch (e) {
            return rejectWithValue(`Не удалось загрузить отзывы - ${e}`)
        }
    }
)