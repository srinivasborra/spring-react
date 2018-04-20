export default function(state =null,action){
	switch(action.type){
	case 'SELECTED_EMPLOYEE':
			return action.payload;
			break;
	}
	return state;
}
