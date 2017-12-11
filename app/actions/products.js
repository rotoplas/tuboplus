import * as types from './types';
import Api from '../lib/api';

export function fetchProducts(){
  return (dispatch, getState) => {
    return Api.get(`/posts`).then(res => {
      dispatch(setSearchedProducts({ products: res }));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export function fetchProductsXCategory(category : any){
  return (dispatch, getState) => {
    return Api.get(`/posts/${category}`).then(res => {
      dispatch(setSearchedProductsXCategory({ productsXCategory: res }));
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

export function setSearchedProductsXCategory( { productsXCategory } ){
  return {
    type: types.SET_SEARCHED_PRODUCTS_X_CATEGORY,
    productsXCategory
  }
}
