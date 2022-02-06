import axios from "../utils/axios";

export const getCities = (payload) =>{
    console.log(payload)
    return axios.get(`cities?name=${payload.data}`);
}