import {takeEvery, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/CityAction';
import * as api from '../../api/CityApi';

function* getCities(action){
    try{
        const {data} = yield api.getCities(action.payload);
        yield put(actions.setCities(data || undefined))
    }catch(error){
        
    }
}


function* watchCityList(){
    yield takeEvery(actions.Types.GET_CITIES, getCities);
}


const CitySaga = [fork(watchCityList)];

export default CitySaga;