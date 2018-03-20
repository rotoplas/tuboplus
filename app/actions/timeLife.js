import * as types from './types';
import Api from '../lib/api';
import timeLife from '../../assets/ldb/vida_util.js';

//FETCHERS

export function fetchTimeLife(){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(dispatch(setTimeLife({ timeLife: timeLife })));
      } catch (e) {
        reject(dispatch(setTimeLife({ timeLife: {} })));
      }
    });
  }
}

//SETTERS

export function setTimeLife( { timeLife } ){
  return {
    type: types.SET_TIME_LIFE,
    timeLife
  }
}
