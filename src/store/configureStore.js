import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "../reducers";
import {ping} from './enchancers/ping';

export const store = createStore(rootReducer, applyMiddleware(ping));