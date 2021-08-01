import productReducerConstant  from '../constants/productReducerConstant'

export const fetchProduct =()=>({
    type:productReducerConstant.PRODUCT_LIST_REQUEST,
});

export const fetchProductList =(payload)=>({
    type:productReducerConstant.PRODUCT_LIST_SUCCESS,
    payload:payload.data
})

export const requestproductById =(payload)=>({
    type:productReducerConstant.PRODUCT_FETCH_REQUEST,
    payload
})

export const fetchProductById =(payload)=>({
    type:productReducerConstant.PRODUCT_FETCH_SUCCESS,
    payload:payload.data
})
