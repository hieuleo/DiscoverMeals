import { createSlice }  from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers:{
        // login
        startLoading:{
            reducer: (state,action) => {
                state.loading = action.payload;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            },
        },
        endLoading:{
            reducer: (state,action) => {
                state.loading = action.payload;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            },
        },
        loginSuccess:{
            reducer: (state,action) => {
                state.user = action.payload;
                state.error = null;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            },
        },
        loginErr:{
            reducer: (state,action) => {
                state.error = action.payload;
                state.user = null;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            },
        },

        // logout:
        logoutSuccess:{
            reducer: (state) => {
                state.user = null;
                state.error = null;
            },
        },

    }
});

export const authReducer = authSlice.actions;
export default authSlice.reducer;