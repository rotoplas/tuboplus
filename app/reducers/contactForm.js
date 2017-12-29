import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const postedContactForm = createReducer({}, {
  [types.POST_CONTACT_FORM](state, action){
    return action.contactForm;
  }
});
