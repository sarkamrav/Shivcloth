import productReducerConstant  from '../constants/productReducerConstant'
import {cartItem} from './util'

// cartItems && cartItems.length 
export const cartReducer =(state={cartItems:[] },action)=>{
        switch(action.type){
          
            case 'ADD_TO_CART_ITEM':
                console.log("state.cartItem",state.cartItems);
                return {
                    ...state,
                    cartItems:cartItem(state.cartItems,action.payload)
                }
            default:
                return state;
        }
    
    }


      