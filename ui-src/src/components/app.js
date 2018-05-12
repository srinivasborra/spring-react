import React from 'react';
import '../index.css';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import * as constants from '../reducers/other-details';

class App extends React.Component{
	render(){
		return(
			<div>
				<h2>{constants.TITLES[0].usertitle}</h2>
				<UserList/>
				<hr/>
				<h2>User Details:</h2>
				<UserDetail/>
			</div>
		);
	}
}
//const App = () =>(
//	<div>
//		<h2>User Details</h2>
//		<UserList/>
//		<hr/>
//		<h2>User Details:</h2>
//		<UserDetail/>
//	</div>
//);
export default App;