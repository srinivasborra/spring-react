import React from 'react';
import '../index.css';
import EmployeeList from '../containers/employee-list';
import EmployeeDetail from '../containers/employee-details';
import * as constants from '../reducers/other-details';
const Employee = () =>(
		<div>
			<h2>{constants.TITLES[0].emptitle}</h2>
			<EmployeeList />
			<hr/>
			<EmployeeDetail />
		</div>
);
export default Employee;