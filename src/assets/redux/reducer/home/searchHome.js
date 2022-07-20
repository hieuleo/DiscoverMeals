import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    keySearch: '',
};

const searchHomeReducer = createSlice({
    name: 'searchHome',
    initialState,
    reducers: {
        addKeySearch: {
            reducer: (state,action) => {
                state.keySearch = action.payload
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
    addKeySearch
} = searchHomeReducer.actions;
export default searchHomeReducer.reducer;