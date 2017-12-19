import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchBenefit(){
  return (dispatch, getState) => {
    return Api.get(`/beneficios`).then(res => {
      dispatch(setBenefit({ benefit: res }));
    }).catch((err) => {
      dispatch(setBenefit({ benefit: [] }));
    })
  }
}

//SETTERS

export function setBenefit( { benefit } ){
  return {
    type: types.SET_BENEFIT,
    benefit
  }
}
