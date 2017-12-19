import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedBenefit = createReducer([], {
  [types.SET_BENEFIT](state, action){
    return action.benefit;
  }
});
