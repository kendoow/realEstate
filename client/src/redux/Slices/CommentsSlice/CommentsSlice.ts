import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchComments, fetchCommentsFirst } from './CommentsActionCreator';

import { CommentsStateTypes, IComment } from "./CommentsSlice.types";

const initialState: CommentsStateTypes = {
    productId: null,
    loading: false,
    error: null,
    comments: [],
}

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending.type]: (state) => {
            state.loading = true
        },
        [fetchComments.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.comments = [...state.comments, ...action.payload]
        },
        [fetchComments.rejected.type]: (state, action) => {
            state.loading = false
            state.comments = []
            state.error = action.payload
        },

        // не нужно если решить проблему useEffect  
        [fetchCommentsFirst.pending.type]: (state) => {
            state.loading = true
        },
        [fetchCommentsFirst.fulfilled.type]: (state, action: PayloadAction<IComment[]>) => {
            state.loading = false
            state.error = null
            state.comments = action.payload
        },
        [fetchCommentsFirst.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.comments = []
            state.error = action.payload
        }
    }
})

const { actions, reducer } = CommentsSlice

export default reducer;