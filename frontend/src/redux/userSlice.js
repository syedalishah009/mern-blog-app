import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    currentuser: null,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
          },
          loginSuccess: (state, action) => {
            state.loading = false;
            state.currentuser = action.payload;
          },
          loginFailure: (state) => {
            state.loading = false;
            state.error = true;
          },

          signupStart: (state) => {
            state.loading = true;
          },
          signupSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
          },
          signupFailure: (state) => {
            state.loading = false;
            state.error = true;
          },

          updateStart: (state) => {
            state.loading = true;
          },
          updateSuccess: (state, action) => {
            state.loading = false;
            state.currentuser = action.payload;
          },
          updateFailure: (state) => {
            state.loading = false;
            state.error = true;
          },
          
          logOut: (state, action) => {
            state.loading = false;
            state.currentuser = action.payload;
          },
    }
})
export const { loginStart, loginSuccess, loginFailure,signupStart,signupSuccess,signupFailure,updateStart,updateSuccess,updateFailure,logOut} = userSlice.actions;

export default userSlice.reducer;