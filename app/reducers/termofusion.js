import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedTermofusion = createReducer({}, {
  [types.SET_TERMOFUSION](state, action){
    return action.termofusion;
  }
});
