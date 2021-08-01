import { takeLatest, all,call, put } from 'redux-saga/effects';
import axios from 'axios';
import productReducerConstant from '../constants/productReducerConstant'
import {fetchProductList,fetchProductById} from '../actions/productAction'
import {addToCartItem} from '../actions/cartAction'
import fetchData from '../utill/fetchData'
/*Genereator function */

function* productList() {
  try{
    const data = yield call(fetchData, { method: 'get', url: `/api/products/` })
    console.log("vvvvvvvvv",data);
    yield put(fetchProductList(data))
  
  } catch(e){
    console.log(e);
  }
 
}


function* fetchById(action) {
  try{
    console.log("actionbbbb",action);
    const data = yield call(fetchData, { method: 'get', url: `/api/products/${action.payload}` })
    console.log("bbbbbbb",data);
    yield put(fetchProductById(data))
  
  } catch(e){
    console.log(e);
  }
} 

function* addToCart(action){
  // alert("ffff")
  // const {paylaod:{id,qty}} = action
  console.log("dddddddd");
  const productData = yield call(fetchData, { method: 'get', url: `/api/products/${action.payload.id}` })
 const {data} =productData;
 const paylaod = {
   product:data._id,
   name:data.name,
   image:data.image,
   price:data.price,
   countInStock:data.countInStock,
   quantity:action.payload.qty

 }

 yield put(addToCartItem(paylaod));
//  brand: "Apple"
// category: "Electronics"
// countInStock: 7
// createdAt: "2021-07-27T06:45:29.301Z"
// description: "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life"
// image: "/images/phone.jpg"
// name: "iPhone 11 Pro 256GB Memory"
// numReview: 0
// price: 599.99
// rating: 4
// review: []
// updatedAt: "2021-07-27T06:45:29.301Z"
// user: "60ffab89ac379b07e4886d98"
// __v: 0

 console.log("ccccc");
//  yield put()
  // qty
}

function* actionWatcher(){
  yield takeLatest('PRODUCT_LIST_REQUEST',productList)
  yield takeLatest('PRODUCT_FETCH_REQUEST',fetchById)
  yield takeLatest('ADD_TO_CART',addToCart)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}



// /*
// import { call, put, takeLatest, all } from 'redux-saga/effects';
// import toggleDropdown from './cartaction'
// import cartactiontype from './carttype';
// import fetchData from '../fetchdata';
// import {valid,invalid,fetchdataaction} from '../cart/cartaction';

// /*Genereator funvtion */

// function* loggedIn(action) {
//   try{
//     let loggedIn = false;
//     console.log("payloadsaga",action.payload);
//     // const data = yield call(fetchData);
//     const data = yield call(fetchData, { method: 'get', url: '/json/passwords.json' })
//     //  yield put(logIn(data))
//     let userdata = action.payload;
//     data.data.map((item)=>{
//       debugger;
//       if(item.username ===userdata.email && item.password === userdata.password){
//         loggedIn = true;
//         localStorage.setItem('loggedIn',loggedIn);
//       }
//     })
//   if(!loggedIn){
//     yield put(invalid('Please Enter Valid Credential'))
//   }
//   if(loggedIn){
//     yield put(valid())
//     try{
//       const user = yield call(fetchData, { method: 'get', url: `/json/shopdata.json` })
//        console.log("apidata",user);
//         yield put(fetchdataaction(user.data));
//         } catch(e){
//             console.log(e);
//         }
//   }
  
//   } catch(e){
//     console.log(e);
//   }
 
// }


// function* actionWatcher(){
//   yield takeLatest('LOGIN',loggedIn)
// }

// export default function* rootSaga() {
//   yield all([actionWatcher()])
// }


// */ 