import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedContact = createReducer({}, {
  [types.SET_CONTACT](state, action){
    return action.contact;
  }
});
