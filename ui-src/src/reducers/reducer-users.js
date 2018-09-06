import {ADD_USER} from '../constants/action-types';
const initialState={
		users:[]
};

const userReducer = (state = initialState,action) =>{
	switch(action.type){
	case ADD_USER:
			state.users.push(action.payload);
			return state;
	
	default:
			return state;
	}
};

export default userReducer;
/*
export default function(){
	return [
	        {
	        	id:1,
	        	first:'User',
	        	last:'Test1',
	        	age:21,
	        	description:'Testuser1 description'
	        	
	        },
	        {
	        	id:2,
	        	first:'User',
	        	last:'Test2',
	        	age:21,
	        	description:'Testuser2 description'
	        	
	        },
	        {
	        	id:3,
	        	first:'User',
	        	last:'Test3',
	        	age:21,
	        	description:'Testuser3 description'
	        	
	        },
	        {
	        	id:4,
	        	first:'User',
	        	last:'Test4',
	        	age:21,
	        	description:'Testuser4 description'
	        	
	        },
	        {
	        	id:5,
	        	first:'User',
	        	last:'Test5',
	        	age:21,
	        	description:'Testuser5 description'
	        	
	        },
	        {
	        	id:6,
	        	first:'User',
	        	last:'Test6',
	        	age:21,
	        	description:'Testuser6 description'
	        	
	        },
	        {
	        	id:7,
	        	first:'User',
	        	last:'Test7',
	        	age:21,
	        	description:'Testuser7 description'
	        	
	        }
	        ]
}*/