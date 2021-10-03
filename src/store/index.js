import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import logger from 'redux-logger';

let store;

export default function configureStore() {
  store = createStore(reducer, applyMiddleware(logger, thunk));
  return store;
}
