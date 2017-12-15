import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchEquivalence(){
  return (dispatch, getState) => {
    return Api.get(`/equivalencias`).then(res => {
      dispatch(setEquivalence({ equivalence: res }));
    }).catch((err) => {
      dispatch(setEquivalence({ equivalence: {} }));
    })
  }
}

//SETTERS

export function setEquivalence( { equivalence } ){
  return {
    type: types.SET_EQUIVALENCE,
    equivalence
  }
}
