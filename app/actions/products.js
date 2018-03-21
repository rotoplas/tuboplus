import * as types from './types';
import Api from '../lib/api';
import categories from '../../assets/ldb/catalogo.js';
import productsDTO from '../../assets/ldb/productos.js';

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
     return new Promise((resolve, reject) => {
       try {
         resolve(dispatch(setSearchedCategories({ categories: categories })));
       } catch (e) {
         reject(dispatch(setSearchedCategories({ categories: [] })));
       }
     });
  }
}

export function fetchProduct(category, productID){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        let product = productsDTO.filter(product => product.idCat === category && product.id === productID);
        resolve(dispatch(setSearchedProduct({ product })));
      } catch (e) {
        reject(dispatch(setSearchedProduct({ product: [] })));
      }
    });
  }
}

export function fetchProductsXCategory(category : any){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        let productsXCategory = productsDTO.filter(product => product.idCat === category);
        resolve(dispatch(setSearchedProductsXCategory({ productsXCategory })));
      } catch (e) {
        reject(dispatch(setSearchedProductsXCategory({ productsXCategory: [] })));
      }
    });
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
