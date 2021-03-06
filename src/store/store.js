import { createStore, applyMiddleware,compose, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer'
import {itemsReducer} from '../reducers/itemsReducer'
import {uiReducer} from '../reducers/uiReducer'
import {productReducer} from '../reducers/productReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  auth:authReducer,
  ui:uiReducer,
  item:itemsReducer,
  product:productReducer
})

export const store = createStore(
 reducer,
 composeEnhancers(
   applyMiddleware(thunk)
 )
);