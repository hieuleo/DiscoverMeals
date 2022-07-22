import { call , put , takeEvery, takeLatest } from 'redux-saga/effects';
import { 
    startGetDataDefault,
    stopGetDataDefault,
    getDataSuccessDefaul,
    getDataErrorDefaul, 
    startGetDataSearch,
    stopGetDataSearch,
    getDataSearchSuccess,
    getDataSearchError,
} from '../../reducer/search/search';
import { Api } from '../../../service/Api';

function* workerSagaSearchDefaul() {
    try{
        yield put(startGetDataDefault(true));
        const data = yield call(Api.getDataSeafood)
        if (data.hasOwnProperty('meals')&& data['meals'].length > 0) {
            const results = data.meals;
            yield put(getDataSuccessDefaul(results))
        }else{
            yield put(getDataErrorDefaul({
                cod: 404,
                message: 'Not Found'
            }));
        }
    }catch(e){
        yield put(getDataErrorDefaul({
            cod: 500,
            message: e
        }));
    }finally{
        yield put(stopGetDataDefault(false));
    }
};

function* watcherSagaSearchDefaul(){
    yield takeEvery('requestDataSearchDefault',workerSagaSearchDefaul)
};


// search:
function* workerSagaSearch(action) {
    try{
        const filter = action.payload.filter;
        const nameMeal = action.payload.meal;
        yield put(startGetDataSearch(true));
        let data = [];
        if(filter === 'name') {
            data = yield call(Api.getDataByName, nameMeal);
        }else{
            if (filter === 'ingredient') {
                data = yield call(Api.getDataFilter, nameMeal, 'i');
            }else if (filter === 'category'){
                data = yield call(Api.getDataFilter, nameMeal, 'c');
            }else{
                data = yield call(Api.getDataFilter, nameMeal, 'a');
            }
        }
        if (data.hasOwnProperty('meals') && data['meals'] !== null) {
            const results = data.meals;
            yield put(getDataSearchSuccess(results))
        }else{
            yield put(getDataSearchError({
                cod: 404,
                message: 'Not Found'
            }));
        }
    }catch(e){
        yield put(getDataSearchError({
            cod: 500,
            message: e
        }));
    }finally{
        yield put(stopGetDataSearch(false));
    }
};


function* watcherSagaSearch(){
    yield takeLatest('userSearchData',workerSagaSearch)
};

export {
    watcherSagaSearchDefaul,
    watcherSagaSearch,
}