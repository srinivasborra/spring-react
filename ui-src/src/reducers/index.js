import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import EmployeeReducer from './reducer-employees';
import SelectedEmployee from './reducer-active-employee';

const allReducers = combineReducers({
	users: UserReducer,
	activeUser : ActiveUserReducer,
	employees : EmployeeReducer,
	selectedEmployee : SelectedEmployee
});
export default allReducers;