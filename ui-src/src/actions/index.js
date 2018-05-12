import {USER_SELECTED} from '../constants/action-types';


export const selectUser = (user) => ({type:USER_SELECTED,payload:user});
