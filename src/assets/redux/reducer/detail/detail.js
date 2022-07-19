import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    dataDetail: {},
    error: null,
};

const DetailsSlice = createSlice({
    name: 'detail',
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
                state.dataDetail = action.payload;
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
                state.dataDetail = {}
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
} = DetailsSlice.actions;
export default DetailsSlice.reducer;