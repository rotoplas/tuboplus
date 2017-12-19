import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function fetchContact(){
  return (dispatch, getState) => {
    return Api.get(`/contactenos`).then(res => {
      dispatch(setContact({ contact: res }));
    }).catch((err) => {
      dispatch(setContact({ contact: {} }));
    })
  }
}

//SETTERS

export function setContact( { contact } ){
  return {
    type: types.SET_CONTACT,
    contact
  }
}
