import {ADD_USER, USER_SELECTED} from '../constants/action-types';


export const selectUser = (user) => ({type:USER_SELECTED,payload:user});

export function addUser(user) {
	  return { type: ADD_USER, payload: user };
	}	