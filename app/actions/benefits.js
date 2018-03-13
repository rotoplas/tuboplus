import * as types from './types';
import Api from '../lib/api';
import beneficios from '../../assets/ldb/beneficios.json';

//FETCHERS

export function fetchBenefit(){
  return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        try {
          resolve(dispatch(setBenefit({ benefit: beneficios })));
        } catch (e) {
          reject(dispatch(setBenefit({ benefit: [] })));
        }
      });
  }
}

//SETTERS

export function setBenefit( { benefit } ){
  return {
    type: types.SET_BENEFIT,
    benefit
  }
}
