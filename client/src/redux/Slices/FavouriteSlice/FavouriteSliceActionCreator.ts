import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { FavouriteFecth, FavouriteAddArguments, FavouriteDeleteArguments } from './FavouriteSlice.types';
import { API_URL } from './../../../http/http';


export const fetchFavourite = createAsyncThunk(
    'favourite/fetch',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get<FavouriteFecth>(`${API_URL}user/product/${userId}`)
            return response.data.favourites
        } catch (e) {
            return rejectWithValue(`Не удалось загрузить избранное - ${e}`)
        }
    }
)

export const addFavourite = createAsyncThunk(
    'favourite/add',
    async (favouriteAddArguments: FavouriteAddArguments, { rejectWithValue }) => {
        try {
            const { userId, productId, products, favourite } = favouriteAddArguments
            const updatedFavourite = [...favourite, ...products.filter(v => v._id === productId)]
            const response = await axios.put<FavouriteFecth>(`${API_URL}user/product/${userId}`,
                                                            {favourites:  updatedFavourite})
            console.log(response)
            return updatedFavourite
        } catch (e) {
            return rejectWithValue(`Не удалось добавить в избранное - ${e}`)            
        }
    }
)

export const deleteFavourite = createAsyncThunk(
    'favourite/delete',
    async (favouriteDeleteArguments: FavouriteDeleteArguments, { rejectWithValue }) => {
        try {
            const { userId, productId, favourite } = favouriteDeleteArguments
            const updatedFavourite = favourite.filter(v => v._id !== productId)
            const response = await axios.put<FavouriteFecth>(`${API_URL}user/product/${userId}`,
                                                            {favourites:  updatedFavourite})
            return updatedFavourite
        } catch (e) {
            return rejectWithValue(`Не удалось удалить из избранного - ${e}`)            
        }
    }
)