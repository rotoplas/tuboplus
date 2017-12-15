import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchTermofusion(){
  return (dispatch, getState) => {
    return Api.get(`/termofusion`).then(res => {
      dispatch(setTermofusion({ termofusion: res }));
    }).catch((err) => {
      dispatch(setTermofusion({ termofusion: {} }));
    })
  }
}

//SETTERS

export function setTermofusion( { termofusion } ){
  return {
    type: types.SET_TERMOFUSION,
    termofusion
  }
}
