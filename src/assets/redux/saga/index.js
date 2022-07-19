import { call, all } from 'redux-saga/effects';
import {watcherSagaHome, watcherSagaRandom} from './home/homeSaga';
import {watcherSagaSearchDefaul, watcherSagaSearch } from './search/searchSaga';
import watcherDetail from './detail/detail';
function* rootSaga() {
    yield all({ // dung mang hay obj điều được nếu obj thì khai báo key
        home:call(watcherSagaHome),
        random:call(watcherSagaRandom),
        searchDefaul:call(watcherSagaSearchDefaul),
        search: call(watcherSagaSearch),
        detail: call(watcherDetail)
    })
};

export default rootSaga;