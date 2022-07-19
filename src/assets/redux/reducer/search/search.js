import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingDefaul: false,
    dataSearchDefaul: [],
    dataSearch: [],
    error: null,
    loadingSearch: false,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // get default values: 
        startGetDataDefault: {
            reducer: (state,action) => {
                state.loadingDefaul = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        stopGetDataDefault: {
            reducer: (state,action) => {
                state.loadingDefaul = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataSuccessDefaul: {
            reducer: (state,action) => {
                state.dataSearchDefaul = action.payload;
                state.errorSearch = null;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataErrorDefaul: {
            reducer: (state,action) => {
                state.dataSearchDefaul = []
                state.errorSearch = action.payload;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },

        // get search parameters
        startGetDataSearch: {
            reducer: (state,action) => {
                state.loadingDefaul = action.payload
                state.loadingSearch = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        stopGetDataSearch: {
            reducer: (state,action) => {
                state.loadingDefaul = action.payload
                state.loadingSearch = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataSearchSuccess: {
            reducer: (state,action) => {
                state.dataSearch = action.payload;
                state.error = null;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataSearchError: {
            reducer: (state,action) => {
                state.dataSearch = [];
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
    //default
    startGetDataDefault,
    stopGetDataDefault,
    getDataSuccessDefaul,
    getDataErrorDefaul,
    // search
    startGetDataSearch,
    stopGetDataSearch,
    getDataSearchSuccess,
    getDataSearchError,
} = searchSlice.actions;

export default searchSlice.reducer;