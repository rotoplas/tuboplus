import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchSearch(params){
  return (dispatch, getState) => {
    return Api.get(`/busqueda/${params}`).then(res => {
      dispatch(setSearchedItems({ itemsSearched: res }));
    }).catch((err) => {
      console.log("err", err);
      dispatch(setSearchedItems({ itemsSearched: [] }));
    })
  }
}

//SETTERS

export function setSearchedItems( { itemsSearched } ){
  return {
    type: types.GET_ITEMS_SEARCHED,
    itemsSearched
  }
}
