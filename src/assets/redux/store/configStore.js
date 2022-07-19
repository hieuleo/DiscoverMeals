import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist' // import persist store

const sagaMiddleware = createSagaMiddleware();

const middleware = getDefaultMiddleware => getDefaultMiddleware({
    thunk: false,
    serializableCheck: { // loại bỏ các action này
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}).concat([sagaMiddleware, logger]);

const store = configureStore ({
    reducer: rootReducer, 
    middleware: middleware
});

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export default store;

export {
    persistor
};