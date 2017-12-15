import { combineReducers } from 'redux';
import * as productsReducer from './products';
import * as equivalenceReducer from './equivalence';
import * as termofusionReducer from './termofusion';

export default combineReducers(Object.assign(
  productsReducer,
  equivalenceReducer,
  termofusionReducer,
));
