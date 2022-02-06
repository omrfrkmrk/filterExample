import {Types} from '../actions/CityAction';

const initialState = {
    cityList: []
};

export const CityReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.SET_CITIES:
            return {
                ...state,
                cityList: action.payload || state.cityList
            };
        default:
            return state;
    }
}