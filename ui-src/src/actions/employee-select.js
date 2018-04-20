export const selectEmployee=(employee)=>{
	console.log("select Employee:"+employee.empName);
	return{
		type: 'SELECTED_EMPLOYEE',
		payload: employee
	}
}

