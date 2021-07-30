import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_ERROR} from '../constants/productReducerConstant'

export const productListReducer =(state={products:[] },action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {...products,loading:true};
        case PRODUCT_LIST_SUCCESS:
            return {products:action.payload,loading:false};
        case PRODUCT_LIST_ERROR:
            return {error:action.payload,loading:false};
        default:
            return state;
    }

}