import {all} from 'redux-saga/effects';

import CitySaga from './CitySaga';


export default function* rootSaga(){
    yield all([
        ...CitySaga
    ]);
}