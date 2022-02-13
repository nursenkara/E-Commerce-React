import { FETCH_PRODUCT_FILTER, FETCH_PRODUCT_LIST } from "../constants"

const initialState = {
    productList:[],
    filteredProductList:[],

}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state=initialState,action) => {
      switch (action.type) {
        case FETCH_PRODUCT_LIST:
            return{
                ...state,
                productList: action.payload,
                filteredProductList:action.payload
            }
        case FETCH_PRODUCT_FILTER:
            return{
                ...state,
                filteredProductList:action.payload
            }

    
    default:
        return state;
      }
}