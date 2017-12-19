import { combineReducers } from 'redux';
import * as productsReducer from './products';
import * as equivalenceReducer from './equivalence';
import * as termofusionReducer from './termofusion';
import * as contactReducer from './contact';
import * as timeLifeReducer from './timeLife';
import * as benefitReducer from './benefit';

export default combineReducers(Object.assign(
  productsReducer,
  equivalenceReducer,
  termofusionReducer,
  contactReducer,
  timeLifeReducer,
  benefitReducer,
));
