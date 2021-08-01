import { combineReducers } from 'redux';
import {productListReducer,productReducer} from '../reducers/productReducer'
import {cartReducer} from '../reducers/cartReducer'

const rootReducer = combineReducers({
    productListReducer:productListReducer,
    productReducer:productReducer,
    cartReducer:cartReducer
});

export default rootReducer