import axios from "axios";
import {FETCH_PRODUCT_LIST,FETCH_PRODUCT_LIST_SUGGESTION,FETCH_PRODUCT_DETAIL} from '../constans';
import { FETCH_PRODUCT_FILTER} from "../constants";
const BASE_URL = "https://localhost:44341/api/"


export const fetchProductList = () => {
    return async dispatch => {
      await axios.get(`${BASE_URL}/products/getall`).then(value => {   
        dispatch({
          type: FETCH_PRODUCT_LIST,
          payload: value.data
        });
      });
    };
  }
  export const fetchProductSuggestion = () => {
    return async dispatch => {
      await axios.get(`${BASE_URL}/products/getall`).then(value => {
        dispatch({
          type: FETCH_PRODUCT_LIST_SUGGESTION,
          payload: (value.data.sort(() => Math.random() - 0.5)).splice(1,10) //random ürün listesi
        });
      });
    };
  }
  export const fetchProductDetail = (slug) => {
    return async dispatch => {
      await axios.get(`${BASE_URL}/products/getbyid?id=${slug}`).then(value => {
        dispatch({
          type: FETCH_PRODUCT_DETAIL,
          payload: value.data
        });
      });
    };
  }

  
export const fetchProductFilter = (categoryId) => {
    return async dispatch => {
        await axios.get(`${BASE_URL}/products/getbycategory?id=${categoryId}`).then(value => {
            dispatch({
              type: FETCH_PRODUCT_FILTER,
              payload: value.data
            });
        });
    };
  }


  
  