import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    keySearch: '',
    category: 'name',
};

const searchHomeReducer = createSlice({
    name: 'searchHome',
    initialState,
    reducers: {
        addKeySearch: {
            reducer: (state,action) => {
                const {value, category} = action.payload;
                state.keySearch = value;
                if (category){
                    state.category = category;
                }
            },
            prepare: (val, category) => {
                return {
                    payload: {
                        value: val,
                        category: category
                    }
                }
            }
        },
    }
});

export const {
    addKeySearch
} = searchHomeReducer.actions;
export default searchHomeReducer.reducer;