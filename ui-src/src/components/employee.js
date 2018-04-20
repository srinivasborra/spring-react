import React from 'react';
import '../index.css';
import EmployeeList from '../containers/employee-list';
import EmployeeDetail from '../containers/employee-details';

const Employee = () =>(
		<div>
			<h2>Employee List</h2>
			<EmployeeList />
			<hr/>
			<EmployeeDetail />
		</div>
);
export default Employee;