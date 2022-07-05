import { createSlice } from '@reduxjs/toolkit';
import { checkAuth, login, logout, registration } from './AuthActionCreator';
import { AuthStateTypes, IUser } from "./AuthSlice.types";

const initialState: AuthStateTypes = {
    loading: false,
    error: null,
    isAuth: false,
    user: {} as IUser
}


export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
    authSet: (state, action) => {
        state.isAuth = action.payload
    },
    authUser:(state, action) =>{
        state.user = action.payload
    }
    },
    extraReducers:{
        [login.pending.type]: (state) => {
            state.loading = true
        },
        [login.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        [login.rejected.type]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.error = action.payload
        },

        [registration.pending.type]: (state) => {
            state.loading = true
        },
        [registration.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        [registration.rejected.type]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.error = action.payload
        },

        [logout.pending.type]: (state) => {
            state.loading = true
        },
        [logout.fulfilled.type]: (state) => {
            state.loading = false
            state.error = null
            state.isAuth = false
            state.user = {} as IUser
        },
        [logout.rejected.type]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.error = action.payload
        },

        [checkAuth.pending.type]: (state) => {
            state.loading = true
        },
        [checkAuth.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        [checkAuth.rejected.type]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.error = action.payload
        },
    }
})

const {actions, reducer} = AuthSlice

export default reducer;