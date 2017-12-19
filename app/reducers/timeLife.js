import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedTimeLife = createReducer({}, {
  [types.SET_TIME_LIFE](state, action){
    return action.timeLife;
  }
});
