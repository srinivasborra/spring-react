import {ADD_ARTICLE,DELETE_ARTICLE} from '../constants/action-types';

const initialState={
		articles:[]
};
const rootReducer = (state = initialState,action) =>{
	switch(action.type){
	case ADD_ARTICLE:
			state.articles.push(action.payload);
			return state;
	
	case DELETE_ARTICLE:
		state.articles.slice(action.payload);
		return state;

	default:
			return state;
	}
};

export default rootReducer;