import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEmployee} from '../actions/employee-select';

class EmployeeList extends React.Component{
	
	createEmployeeList(){
		return this.props.employees.map((emp)=>{
			return(<li key={emp.empId}
			onClick={()=>this.props.selectEmployee(emp)}
			>{emp.empName}</li>)
		});
	}
	
	render(){
		return(
				<ul>
					{this.createEmployeeList()}
				</ul>
		);
	}
}
function mapStateToProps(state){
	return {
		employees : state.employees,
		otherdetails : state.otherDetails
	};
}

function mapEmpDispatcherToProps(dispatch){
	return bindActionCreators({selectEmployee:selectEmployee},dispatch);
}

export default connect(mapStateToProps,mapEmpDispatcherToProps)(EmployeeList);