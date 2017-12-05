import * as types from './types';
import Api from '../lib/api';

export function fetchProducts(){
  return (dispatch, getState) => {
    return Api.get(`/photos`).then(res => {
      dispatch(setSearchedProducts({ products: res }));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export function setSearchedProducts( { products } ){
  return {
    type: types.SET_SEARCHED_PRODUCTS,
    products
  }
}
