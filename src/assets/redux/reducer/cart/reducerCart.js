import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingCart: false,
    dataCart: [],
    errorCart: null,
};

// khi click thì đẩy sản phẩm vào dataCart: [],

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addMeals:{
            reducer: (state,action) => {
                const {id, data} = action.payload;
                const check = state.dataCart.find(item => item.idMeal === id);
                if (!check) {
                    state.dataCart.push(data);
                }
            },
            prepare: (id, data) => {
                return {
                    payload: {
                        id: id,
                        data: data
                    }
                }
            }},
        deleteMeals:{
            reducer: (state,action) => {
                const {id} = action.payload;
                const newList = state.dataCart.filter(item => item.idMeal !== id);
                state.dataCart = newList;
                
            },
            prepare: (id) => {
                return {
                    payload: {
                        id: id,
                    }
                }
            }}, 
    } 
});

export const {addMeals, deleteMeals} = cartSlice.actions;
export default cartSlice.reducer;
