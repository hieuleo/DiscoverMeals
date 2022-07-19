import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/index";
import randomReducer from "./home/ramdom";
import searchReducer from "./search/search";
import detailReducer from "./detail/detail";
import cartReducer from "./cart/reducerCart";
import storage from 'redux-persist/lib/storage'; ////redux-persist
import { persistReducer } from 'redux-persist';  //redux-persist

const configCartPersistReducer = {
    key: 'Meals-DataCart',
    storage,
    whitelist: ['dataCart'] // chi luu dataCart
};

const rootReducer = combineReducers({
    home: homeReducer,
    random: randomReducer,
    search: searchReducer,
    detail: detailReducer,
    cart: persistReducer(configCartPersistReducer,cartReducer),
});

export default rootReducer;