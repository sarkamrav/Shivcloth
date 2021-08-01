import productReducerConstant  from '../constants/productReducerConstant'
// import products from '../products';

    /* fetching all the product */
export const productListReducer = (state={products:[] },action)=>{
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return { ...state, loading:true};
        case 'PRODUCT_LIST_SUCCESS':
            return {products:action.payload,loading:false};
        case 'PRODUCT_LIST_ERROR':
            return {error:action.payload,loading:false};
        default:
            return state;
    }

}

/* fetch single product */
export const productReducer =(state={product:{reviews:[]} },action)=>{
    switch(action.type){
        case productReducerConstant.PRODUCT_FETCH_REQUEST:
            return {...state,loading:true};
        case productReducerConstant.PRODUCT_FETCH_SUCCESS:
            return {product:action.payload,loading:false};
        case productReducerConstant.PRODUCT_FETCH_ERROR:
            return {error:action.payload,loading:false};
        default:
            return state;
    }

}
