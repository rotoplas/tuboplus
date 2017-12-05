import { combineReducers } from 'redux';
import * as productsReducer from './products';

export default combineReducers(Object.assign(
  productsReducer,
));
