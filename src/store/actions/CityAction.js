export const Types = {
    GET_CITIES: 'GET_CITIES',
    SET_CITIES: 'SET_CITIES'
};

export const getCities = (payload) => ({
    type: Types.GET_CITIES,
    payload
});

export const setCities = (payload) => ({
    type: Types.SET_CITIES,
    payload
});
