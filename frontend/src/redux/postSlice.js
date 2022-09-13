import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentposts: [],
    loading: false,
    error: false
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostStart: (state) => {
            state.loading = true;
          },
          getPostSuccess: (state, action) => {
            state.loading = false;
            state.currentposts = action.payload;
          },
          getPostFailure: (state) => {
            state.loading = false;
            state.error = true;
          },
    }
})
export const { getPostStart, getPostSuccess, getPostFailure} = postsSlice.actions;

export default postsSlice.reducer;