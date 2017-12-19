import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchTimeLife(){
  return (dispatch, getState) => {
    return Api.get(`/vida_util`).then(res => {
      dispatch(setTimeLife({ timeLife: res }));
    }).catch((err) => {
      dispatch(setTimeLife({ timeLife: {} }));
    })
  }
}

//SETTERS

export function setTimeLife( { timeLife } ){
  return {
    type: types.SET_TIME_LIFE,
    timeLife
  }
}
