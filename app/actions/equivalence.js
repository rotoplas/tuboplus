import * as types from './types';
import Api from '../lib/api';
import equivalences from '../../assets/ldb/equivalencias.json';

//FETCHERS

export function fetchEquivalence(){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(dispatch(setEquivalence({ equivalence: equivalences })));
      } catch (e) {
        reject(dispatch(setEquivalence({ equivalence: {} })));
      }
    });
  }
}

//SETTERS

export function setEquivalence( { equivalence } ){
  return {
    type: types.SET_EQUIVALENCE,
    equivalence
  }
}
