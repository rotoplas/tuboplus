import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const itemsSearched = createReducer([], {
  [types.GET_ITEMS_SEARCHED](state, action){
    return action.itemsSearched;
  }
});
