import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingRandom: false,
    dataRandom: [],
    errorRandom: null,
};

const randomSlice = createSlice({
    name: 'random',
    initialState,
    reducers: {
        startGetDataRandom: {
            reducer: (state,action) => {
                state.loadingRandom = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        stopGetDataRandom: {
            reducer: (state,action) => {
                state.loadingRandom = action.payload
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataRandomSuccess: {
            reducer: (state,action) => {
                state.dataRandom = action.payload;
                state.errorRandom = null;
            },
            prepare: (val) => {
                return {
                    payload: val
                }
            }
        },
        getDataRandomError: {
            reducer: (state,action) => {
                state.dataRandom = []
                state.errorRandom = action.payload;
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
    startGetDataRandom,
    stopGetDataRandom,
    getDataRandomSuccess,
    getDataRandomError
} = randomSlice.actions;
export default randomSlice.reducer;