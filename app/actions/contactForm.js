import * as types from './types';
import Api from '../lib/api';

//FETCHERS

export function sendContactForm(params){
  return (dispatch, getState) => {
    return Api.post(`http://35.168.212.248/wp-json/servicios/wp-json/servicios/guardar-datos-formularios`, params).then(res => {
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
    headers["Authorization"] = "MDSMailing:683db2078f4605c2f6c00695bccd3506-us12";
    return Api.post(`https://us12.api.mailchimp.com/3.0/lists/3ca3d235ca/members/`, params, headers).then(res => {
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
