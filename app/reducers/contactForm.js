import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const postedContactForm = createReducer({}, {
  [types.POST_CONTACT_FORM](state, action){
    return action.contactForm;
  }
});

export const postedSubscribeForm = createReducer({}, {
  [types.POST_SUBSCRIBE_FORM](state, action){
    return action.subscribeForm;
  }
});
