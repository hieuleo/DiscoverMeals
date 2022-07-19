import { call , put , takeEvery } from 'redux-saga/effects';
import { 
    startGetData,
    stopGetData,
    getDataSuccess,
    getDataError 
} from '../../reducer/home/index';
import { 
    startGetDataRandom,
    stopGetDataRandom,
    getDataRandomSuccess,
    getDataRandomError
} from '../../reducer/home/ramdom';
import { Api } from '../../../service/Api';

function* workerSagaHome() {
    try{
        yield put(startGetData(true));
        const data = yield call(Api.getDataCategories)
        if (data.hasOwnProperty('categories')&& data['categories'].length > 0) {
            const results = data.categories;
            yield put(getDataSuccess(results))
        }else{
            yield put(getDataError({
                cod: 404,
                message: 'Not Found'
            }));
        }
    }catch(e){
        yield put(getDataError({
            cod: 500,
            message: e
        }));
    }finally{
        yield put(stopGetData(false));
    }
};

function* watcherSagaHome(){
    yield takeEvery('requestHomeData',workerSagaHome)
};

/// random
function* workerSagaRandom() {
    try{
        yield put(startGetDataRandom(true));
        const dataRandom = yield call(Api.getDataRandom);
        console.log(dataRandom)
        if (dataRandom.hasOwnProperty('meals')) {
            const results = dataRandom.meals;
            yield put(getDataRandomSuccess(...results))
        }else{
            yield put(getDataError({
                cod: 404,
                message: 'Not Found'
            }));
        }
    }catch(e){
        yield put(getDataRandomError({
            cod: 500,
            message: e
        }));
    }finally{
        yield put(stopGetDataRandom(false));
    }
};

function* watcherSagaRandom(){
    yield takeEvery('requestRandomData',workerSagaRandom)
};

export{
   watcherSagaHome,
   watcherSagaRandom,
}