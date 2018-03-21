import * as types from './types';
import Api from '../lib/api';
import productsDTO from '../../assets/ldb/productos.js';

//FETCHERS

export function fetchSearch(params){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        let itemsSearched = productsDTO.filter(product => product.titulo.indexOf(params) > -1);
        resolve(dispatch(setSearchedItems({ itemsSearched })));
      } catch (e) {
        reject(dispatch(setSearchedItems({ itemsSearched: [] })));
      }
    });
  }
}

//SETTERS

export function setSearchedItems( { itemsSearched } ){
  return {
    type: types.GET_ITEMS_SEARCHED,
    itemsSearched
  }
}
