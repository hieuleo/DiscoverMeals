import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/index";
import randomReducer from "./home/ramdom";
import searchReducer from "./search/search";
import detailReducer from "./detail/detail";
import cartReducer from "./cart/reducerCart";
import authReducer from "./auth/auth";
import searchHomeReducer from "./home/searchHome";
import commentReducer from "./comment/comment";
import storage from 'redux-persist/lib/storage'; ////redux-persist
import { persistReducer } from 'redux-persist';  //redux-persist

const configCartPersistReducer = {
    key: 'Meals-DataCart',
    storage,
    whitelist: ['dataCart']
};

const configAuthPersistReducer = {
    key: 'user-App-Meal',
    storage,
    whitelist: ['user'] 
};

const configSearchHomeReducer = {
    key: 'user-App-Meal',
    storage,
    whitelist: ['keySearch'] 
};

const configCommentReducer = {
    key: 'list-comment-user',
    storage,
    whitelist: ['listComments'] 
};

const rootReducer = combineReducers({
    home: homeReducer,
    random: randomReducer,
    search: searchReducer,
    detail: detailReducer,
    cart: persistReducer(configCartPersistReducer,cartReducer),
    auth: persistReducer(configAuthPersistReducer,authReducer),
    searchHome: persistReducer(configSearchHomeReducer,searchHomeReducer),
    comment: persistReducer(configCommentReducer,commentReducer),
});

export default rootReducer;