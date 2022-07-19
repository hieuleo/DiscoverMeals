// step-3: 
import { put, call, takeLatest} from 'redux-saga/effects';
import {
    startGetData,
    stopGetData,
    getDataSuccess,
    getDataError
} from '../../reducer/detail/detail';
import { Api } from '../../../service/Api';

function* detailWorker (action){
    try{
        const idMeal = action.payload;

        yield put(startGetData(true));

        const result = yield call(Api.getDataById, idMeal); // nhớ là không dùng hàm mà dùng như này:(Api.getDataWeather, nameCity);
        
        if(result.hasOwnProperty('meals') && result['meals'] !== null){
            yield put(getDataSuccess(...result['meals']));
        }else{
            yield put(getDataError({
                cod: 404,
                message: "not found",
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
}

function* detailWatcher() {
    yield takeLatest('detailAction',detailWorker);
} 

export default detailWatcher;