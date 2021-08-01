// import productReducerConstant  from '../constants/productReducerConstant'

export const addToCart =(id,qty)=>({
    type:'ADD_TO_CART',
    payload:{
        id,qty
    }
});


export const addToCartItem =(payload)=>({
    type:'ADD_TO_CART_ITEM',
    payload
});



