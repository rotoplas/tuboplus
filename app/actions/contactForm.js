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

export function sendSubscribeForm(params){
  return (dispatch, getState) => {
    //API KEY -> 0a4f35e5b5bd7c8fe749f2181aab0430-us16
    //ID LIST -> 418415c7b4
    //USUARIO -> MDSMailing
    let headers = new Array();
    headers["Authorization"] = "MDSMailing:0a4f35e5b5bd7c8fe749f2181aab0430-us16";
    return Api.postCF(`https://us16.api.mailchimp.com/3.0/lists/418415c7b4/members/`, params, headers).then(res => {
      dispatch(setSubscribeForm({ subscribeForm: res }));
    }).catch((err) => {
     console.log("err", err);
      dispatch(setSubscribeForm({ subscribeForm: err }));
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

export function setSubscribeForm( { subscribeForm } ){
  return {
    type: types.POST_SUBSCRIBE_FORM,
    subscribeForm
  }
}
