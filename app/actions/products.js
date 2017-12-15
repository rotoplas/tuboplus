import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchProducts(){
  return (dispatch, getState) => {
    return Api.get(`/posts`).then(res => {
      dispatch(setSearchedProducts({ products: res }));
    }).catch((err) => {
      console.log(err);
      dispatch(setSearchedProducts({ products: [] }));
    })
  }
}

export function fetchCategories(){
  return (dispatch, getState) => {
    return Api.get(`/catalogo`).then(res => {
      dispatch(setSearchedCategories({ categories: res }));
    }).catch((err) => {
      console.log(err);
      dispatch(setSearchedCategories({ categories: [] }));
    })
  }
}

export function fetchProduct(category, product){
  return (dispatch, getState) => {
    return Api.get(`/productos/${category}/${product}`).then(res => {
      dispatch(setSearchedProduct({ product: res }));
    }).catch((err) => {
      console.log(err);
      dispatch(setSearchedProduct({ product: {} }));
    })
  }
}

export function fetchProductsXCategory(category : any){
  return (dispatch, getState) => {
    return Api.get(`/productos/${category}`).then(res => {
      dispatch(setSearchedProductsXCategory({ productsXCategory: res }));
    }).catch((err) => {
      console.log(err);
      dispatch(setSearchedProductsXCategory({ productsXCategory: [] }));
    })
  }
}

//SETTERS

export function setSearchedProduct( { product } ){
  return {
    type: types.SET_SEARCHED_PRODUCT,
    product
  }
}

export function setSearchedProducts( { products } ){
  return {
    type: types.SET_SEARCHED_PRODUCTS,
    products
  }
}

export function setSearchedCategories( { categories } ){
  return {
    type: types.SET_SEARCHED_CATEGORIES,
    categories
  }
}

export function setSearchedProductsXCategory( { productsXCategory } ){
  return {
    type: types.SET_SEARCHED_PRODUCTS_X_CATEGORY,
    productsXCategory
  }
}
