import  axios  from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { API_URL } from './../../../http/http';
import $api from '../../../http/http';
import { AuthResponse, IPasswordUpdate, IUser, UserLoginType, UserRegistrationType } from './AuthSlice.types';



export const registration = createAsyncThunk(
    'auth/registration',
    async(user: UserRegistrationType, {rejectWithValue}) => {
        try {
            const response : AxiosResponse<AuthResponse> = await $api.post<AuthResponse>('/jwt/registration', user)
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            return rejectWithValue(`Не удалось зарегистрироваться`)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async(user: UserLoginType, {rejectWithValue}) => {
        try {
            const response : AxiosResponse<AuthResponse> = await $api.post<AuthResponse>('/jwt/login', user)
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            return rejectWithValue(`Не удалось войти`)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async(_, {rejectWithValue}) => {
        try {
            await $api.post<void>('/jwt/logout')
            localStorage.removeItem('accessToken')
        } catch (e) {
            return rejectWithValue(`Не удалось выйти из аккаунта`)
        }
    }
)


export const checkAuth = createAsyncThunk(
    'auth/chekAuth',
    async(_,{rejectWithValue}) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}jwt/refresh`, {withCredentials: true})
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            return rejectWithValue(`Ошибка при обновлении токена`)           
        }
    }
)

export const authUserUpdate = createAsyncThunk(
    'auth/userUpdate',
    async (user: IUser, { rejectWithValue }) => {
        try {
            const response = await axios.put<IUser>(`${API_URL}jwt/users`, user, { withCredentials: true })
            return response.data
        } catch (e) {
            return rejectWithValue(`Ошибка при обновлении данных профиля`)
        }
    }
)

export const authUserUpdatePassword = createAsyncThunk(
    'auth/userUpdate/password',
    async (password: IPasswordUpdate, { rejectWithValue }) => {
        try {
            await axios.put<string>(`${API_URL}jwt/users/password`, password, { withCredentials: true })
        } catch (e) {
            return rejectWithValue(`Ошибка при обновлении пароля`)
        }
    }
)

// export const fetchUsers = createAsyncThunk(
//     'auth/users',
//     async(_, {rejectWithValue}) => {
//         try {
//             const users:AxiosResponse<AuthResponse> = await $api.get<IUser[]>('/jwt/users')
//             localStorage.removeItem('accessToken')
//             return users
//         } catch (e) {
//             return rejectWithValue(`Не удалось зарегистрироваться`)
//         }
//     }
// )