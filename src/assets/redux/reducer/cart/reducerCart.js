import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingCart: false,
    dataCart: {},
    errorCart: null,
};

// khi click thì đẩy sản phẩm vào dataCart: [],

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addMeals:{
            reducer: (state,action) => {
                const {idUser, idMeal, data} = action.payload;
                if (state.dataCart.hasOwnProperty(idUser)){
                    const check = state.dataCart[idUser].find(item => item.idMeal === idMeal);
                    if (!check){
                        state.dataCart[idUser].push(data)
                    }
                }else{
                        state.dataCart[idUser] = [];
                        state.dataCart[idUser].push(data)
                }
            },
            prepare: (idUser, idMeal, data) => {
                return {
                    payload: {
                        idUser: idUser,
                        idMeal: idMeal,
                        data: data
                    }
                }
            }},
        deleteMeals:{
            reducer: (state,action) => {
                const {idUser, idMeal} = action.payload;
                const newList = state.dataCart[idUser].filter(item => item.idMeal !== idMeal);
                state.dataCart[idUser] = newList;
            },
            prepare: (idUser, idMeal) => {
                return {
                    payload: {
                        idUser: idUser,
                        idMeal: idMeal,
                    }
                }
            }}, 
    } 
});

export const {addMeals, deleteMeals} = cartSlice.actions;
export default cartSlice.reducer;
