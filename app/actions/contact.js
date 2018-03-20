import * as types from './types';
import Api from '../lib/api';
import contact from '../../assets/ldb/contactenos.js';

//FETCHERS

export function fetchContact(){
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(dispatch(setContact({ contact: contact })));
      } catch (e) {
        reject(dispatch(setContact({ contact: [] })));
      }
    });
  }
}

//SETTERS

export function setContact( { contact } ){
  return {
    type: types.SET_CONTACT,
    contact
  }
}
