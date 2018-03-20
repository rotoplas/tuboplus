import * as types from './types';

//SETTERS

export function setIsConnected( { isConnected } ){
  return {
    type: types.SET_IS_CONNECTED,
    isConnected
  }
}
