import { combineReducers } from 'redux';
import * as productsReducer from './products';
import * as equivalenceReducer from './equivalence';
import * as termofusionReducer from './termofusion';
import * as contactReducer from './contact';
import * as timeLifeReducer from './timeLife';
import * as benefitReducer from './benefit';
import * as contactFormReducer from './contactForm';
import * as itemsSearchedReducer from './search';
import * as networkReducer from './network'

export default combineReducers(Object.assign(
  productsReducer,
  equivalenceReducer,
  termofusionReducer,
  contactReducer,
  timeLifeReducer,
  benefitReducer,
  contactFormReducer,
  itemsSearchedReducer,
  networkReducer,
));
