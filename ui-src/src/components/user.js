import React from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import {API } from "../constants/action-types";

class User extends React.Component{
	constructor(){
		super();
		this.state={users:[],employeeId:'',userName:'',userType:'',userStatus:'',project:'',isLoading:false};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.userDetails = this.userDetails.bind();
	}
	componentDidMount(){
		this.setState({isLoading:true});
		this.userDetails();
		//fetch(API + "users").then(response =>  response.json()).then((data) =>{this.setState({users:data});})
	}
	handleChange(event){
		this.setState({[event.target.id]:event.target.value});
	}
	handleSubmit(event){
		event.preventDefault();
		let postdata = {employeeId:this.state.employeeId,userName:this.state.userName,userType:this.state.userType,userStatus:this.state.userStatus,project:this.state.project};
		fetch("user",{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body : JSON.stringify(postdata)
		}).then((response)=>{if(response.status== "200"){
			this.userDetails();
			this.setState({employeeId:'',userName:'',userType:'',userStatus:'',project:''});
		}else{console.log("Not OK");}}).catch((err)=>console.log(err))
	}
	userDetails(){
		fetch(API + "users").then(response =>  response.json()).then((data) =>{this.setState({users:data});});
	}
	listUsers(){
		const usersdata = this.state.users;
		return(
				<div>
					<ReactTable  data={usersdata} 
					columns={[
								{
									Header:'empId',
									accessor:"employeeId",
									show:false
								},
					            {
					            	Header:'User Name',
					            	accessor:"userName",
					            	filterable:true,
					            	filterMethod:(filter,row)=>
					            		row[filter.id].startsWith(filter.value)
					            },
					            {
					            	Header:'Type',
					            	accessor:"userType",
					            	sortable: false
					            },
					            {
					            	Header:'Status',
					            	accessor:"userStatus"
					            },
					            {
					            	Header:'Project',
					            	accessor:"project"
					            }
					          ]}
					 style={{height: "300px"}}
					 className="-striped -highlight"
					 getTrProps={this.getTrProps}
					 onScroll={this.scrollTable}
					/>
						
				</div>
		);
	}
	
	render(){
		const listUsers = this.listUsers();
		return(
				<div>
						<div className="frmblock">
							<form onSubmit={this.handleSubmit}>
								<div className="from-group">
									<label htmlFor="employeeId">Employee Id</label>
									<input type="text" id="employeeId" className="form-control" value={this.state.employeeId} onChange={this.handleChange}/>
								</div>
								<div className="from-group">
									<label htmlFor="userName">User Name</label>
									<input type="text" id="userName" className="form-control" value={this.state.userName} onChange={this.handleChange} />
								</div>
									<div className="from-group">
									<label htmlFor="project">Project</label>
									<select id="project" className="form-control" value={this.state.project} onChange={this.handleChange}>
									<option>Select Project</option>
									<option value="1">Viserion</option>
									<option value="2">eDiscovery</option>
									<option value="3">Test Project</option>
								</select>
								</div>
								<div className="from-group">
									<label htmlFor="userType">Type</label>
									<select id="userType" className="form-control" value={this.state.userType} onChange={this.handleChange}>
									<option>Select User Type</option>
									<option value="1">Admin</option>
									<option value="2">Read Only</option>
								</select>
								</div>
								<div className="from-group">
									<label htmlFor="userStatus">Status</label>
									<select id="userStatus" className="form-control" value={this.state.userStatus} onChange={this.handleChange}>
										<option>Select Status</option>
										<option value="1">Active</option>
										<option value="0">Inactive</option>
									</select>
								</div>
								<button type="submit" className="btn btn-success btn-lg">Save</button>
							</form>
						</div>
						<div>{listUsers}</div>
				</div>
		);
	}
}

export default User;

