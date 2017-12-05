import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedProducts = createReducer({}, {
  [types.SET_SEARCHED_PRODUCTS](state, action){
    let newState = {};
    action.products.forEach((product) => {
      newState[product.id] = product
    });
    return newState;
  }
});
