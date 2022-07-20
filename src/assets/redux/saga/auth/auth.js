import { put, call, takeLatest} from 'redux-saga/effects';
import {authReducer} from '../../reducer/auth/auth';
import getToken from '../../../service/auth';

function* WorkerAuthLogin (action){
    try{
        const user = action.payload.user;
        yield put(authReducer.startLoading(true));
        const respondData = yield call(getToken, user);
        if (respondData !== null){
            yield put(authReducer.loginSuccess(respondData));
        }else{
            yield put(authReducer.loginErr({
                cod: 404,
                message: 'login unsuccessful',
            }));
        };
    }catch(e){
        yield put(authReducer.loginErr({
            cod: 500,
            message: e,
        }));
    }finally{
        yield put(authReducer.endLoading(true));
    }
};

function* watcherAuthLogin() {
    yield takeLatest('authLoginAction',WorkerAuthLogin);
};

export default watcherAuthLogin;