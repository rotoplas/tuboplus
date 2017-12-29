import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function sendContactForm(params){
  return (dispatch, getState) => {
    return Api.post(`/wp-json/servicios/guardar-datos-formularios`, params).then(res => {
      console.log("res", res);
      dispatch(setContactForm({ contactForm: res }));
    }).catch((err) => {
     console.log("err", err);
      dispatch(setContactForm({ contactForm: [] }));
    })
  }
}

//SETTERS

export function setContactForm( { contactForm } ){
  return {
    type: types.POST_CONTACT_FORM,
    contactForm
  }
}
