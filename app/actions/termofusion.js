import * as types from './types';
import Api from '../lib/api';
import termofusion from '../../assets/ldb/termofusion.json';

//FETCHERS

export function fetchTermofusion(){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(dispatch(setTermofusion({ termofusion: termofusion })));
      } catch (e) {
        reject(dispatch(setTermofusion({ termofusion: {} })));
      }
    });
  }
}

//SETTERS

export function setTermofusion( { termofusion } ){
  return {
    type: types.SET_TERMOFUSION,
    termofusion
  }
}
