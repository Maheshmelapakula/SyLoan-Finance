import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk'
import { AuthReducer } from './AuthReducer/reducer';

let middleware=[thunk]

let rootReducer=combineReducers(AuthReducer)

export const store=legacy_createStore(rootReducer,applyMiddleware(...middleware));