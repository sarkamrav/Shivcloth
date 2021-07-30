import { combineReducers } from 'redux';
import {productListReducer} from '../reducers/productReducer'

const rootReducer = combineReducers({
    productReducer:productListReducer
});

export default rootReducer