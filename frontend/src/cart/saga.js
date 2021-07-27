import { takeLatest, all } from 'redux-saga/effects';


/*Genereator function */

function* check(action) {
  try{
  console.log("hi welcome to saga");
  
  } catch(e){
    console.log(e);
  }
 
}


function* actionWatcher(){
  yield takeLatest('START',check)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}

