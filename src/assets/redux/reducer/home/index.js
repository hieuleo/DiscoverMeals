import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    dataCategories: [],
    error: null,
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        startGetData: {
            reducer: (state,action) => {
                state.loading = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        stopGetData: {
            reducer: (state,action) => {
                state.loading = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataSuccess: {
            reducer: (state,action) => {
                state.dataCategories = action.payload;
                state.error = null;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataError: {
            reducer: (state,action) => {
                state.dataCategories = []
                state.error = action.payload;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
    }
});

export const {
    startGetData,
    stopGetData,
    getDataSuccess,
    getDataError
} = homeSlice.actions;
export default homeSlice.reducer;