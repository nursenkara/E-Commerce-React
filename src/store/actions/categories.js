import axios from "axios";
import { FETCH_CATEGORY_LIST } from "../constants";

const BASE_URL = "https://localhost:44341/api/"

export const fetchCategoryList = () => {
return async dispatch =>{
    await axios.get(`${BASE_URL}/categories/getall`).then(value => {
        dispatch({
            type:FETCH_CATEGORY_LIST,
            payload:value.data
        })
    })
}
}