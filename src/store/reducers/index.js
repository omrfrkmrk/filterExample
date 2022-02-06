import {combineReducers} from 'redux';

import {CityReducer} from './CityReducer';

const rootReducer = combineReducers({
    CityList: CityReducer
});


export default rootReducer;