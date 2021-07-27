import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
 import rootSaga from '../cart/saga'
import logger from 'redux-logger'
import rootReducer from './rootreducer'
// we need an initialState otherwise , store will freak out


const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
export  const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware,logger)
)

sagaMiddleware.run(rootSaga)

export default store ;