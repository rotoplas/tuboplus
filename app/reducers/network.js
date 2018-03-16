import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isConnected: false
};

export const isConnected = createReducer([], {
  [types.SET_IS_CONNECTED](state = initialState, action){
    return action.isConnected;
  }
});
