import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectedEmployee} from '../reducers/reducer-active-employee';

class EmployeeDetail extends React.Component{
	render(){
		if(!this.props.employee){
			return (<h3>select any employee...</h3>);
		}
		return(
				<div>
					<h2>{this.props.employee.empName}</h2>
					<h2>{this.props.employee.department}</h2>
					<h2>{this.props.employee.role}</h2>
				</div>
		);
	}
}

function mapEmpStateToProps(state){
	console.log(state.selectedEmployee);
	return{
		employee : state.selectedEmployee
	}
}
export default connect(mapEmpStateToProps)(EmployeeDetail);