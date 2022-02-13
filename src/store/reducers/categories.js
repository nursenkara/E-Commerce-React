import { FETCH_CATEGORY_LIST } from "../constants";
const initialState = {
    categoryList:[]
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_CATEGORY_LIST:
          return{
            ...state,
            categoryList: action.payload
          }
        default:
          return state;
      }
}