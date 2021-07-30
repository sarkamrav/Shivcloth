import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_ERROR} from '../constants/productReducerConstant'

export const fetchProduct =()=>({
    type:'PRODUCT_LIST',
});

export const fetchProductList =(payload)=>({
    type:'PRODUCT_LIST_SUCCESS',
    payload:payload
})