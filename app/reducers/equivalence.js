import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedEquivalence = createReducer({}, {
  [types.SET_EQUIVALENCE](state, action){
    return action.equivalence;
  }
});
