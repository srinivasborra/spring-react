import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import EmployeeReducer from './reducer-employees';
import SelectedEmployee from './reducer-active-employee';
import rootReducer from './reducer-articles';

const allReducers = combineReducers({
	users: UserReducer,
	activeUser : ActiveUserReducer,
	employees : EmployeeReducer,
	selectedEmployee : SelectedEmployee,
	articles : rootReducer
});
export default allReducers;