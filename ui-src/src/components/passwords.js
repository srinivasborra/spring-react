import React from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import {API } from '../constants/action-types';
import Popup from './popup';
class Passwords extends React.Component{
	constructor(){
		super();
		this.state={projectdetails:[],project:'',pwdtype:'',idoruser:'',password:'',passwordstatus:'1',showcleartext:0};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.id]:event.target.value});
		if(event.target.checked){
			this.setState({showcleartext:1});
		}else{this.setState({showcleartext:0});}
	}
	handleSubmit(event){
		event.preventDefault();
		let postdata = {project:this.state.project,
				        pwdtype:this.state.pwdtype,
				        idoruser:this.state.idoruser,
				        password:this.state.password,
				        passwordstatus:this.state.passwordstatus,
				        showcleartext:this.state.showcleartext};
		fetch("passwords",{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body : JSON.stringify(postdata)
		}).then((response)=>{if(response.status== "200"){
			this.passwordDetails();
			this.setState({project:'',pwdtype:'',idoruser:'',password:'',passwordstatus:'',showcleartext:0});
		}else{console.log("Not OK");}}).catch((err)=>console.log(err))
	}
	passwordDetails(){
		let activeDetails=1;
		fetch(API + "passwords/"+activeDetails).then(response =>  response.json()).then((data) =>{this.setState({projectdetails:data});});
	}
	displaydetails(){
		const pdata=this.state.projectdetails;
		const plist = pdata.map((data,index) => <tr><td>{data.idoruser}</td><td onClick={this.togglePopup.bind(this)}>{data.password}</td><td>{data.md5Password}</td><td>{data.obfPassword}</td></tr>);
		return(
				<div>
					<table border="1">
						<tr><th>User</th><th>Password</th><th>MD5 Format</th><th>OBF Format</th></tr>
						<tbody>
						 {plist}
						</tbody>
					</table>
				</div>
		);
	}
	togglePopup(pwd) {
	    this.setState({
	      showPopup: !this.state.showPopup
	    });
	  }
	render(){
		const pwddetails = this.displaydetails();
		console.log(pwddetails);
		return(
			<div>
			<div className="frmblock">
			<form onSubmit={this.handleSubmit}>
				<div className="from-group">
					<label htmlFor="project">Type</label>
					<select id="project" className="form-control" value={this.state.project} onChange={this.handleChange}>
					<option>Select Project</option>
					<option value="1">Viserion</option>
					<option value="2">eDiscovery</option>
					<option value="3">Test Project</option>
					</select>
				</div>
				<div className="from-group">
					<label htmlFor="pwdtype">Type</label>
					<select id="pwdtype" className="form-control" value={this.state.pwdtype} onChange={this.handleChange}>
					<option>Select Type</option>
					<option value="1">Application</option>
					<option value="2">DB</option>
					<option value="3">Certificate</option>
					</select>
				</div>
				<div className="from-group">
					<label htmlFor="idoruser">ID/User Name</label>
					<input type="text" id="idoruser" className="form-control" value={this.state.idoruser} onChange={this.handleChange}/>
				</div>
				<div className="from-group">
					<label htmlFor="password">Password</label>
					<input type="text" id="password" className="form-control" value={this.state.password} placeholder="Clear Text" onChange={this.handleChange}/>
				</div>
				<div className="from-group">
					<label htmlFor="passwordstatus">Status</label>
					<select id="passwordstatus" className="form-control" value={this.state.passwordstatus} onChange={this.handleChange}>
						<option value="1">Active</option>
						<option value="0">Inactive</option>
					</select>
				</div>
				<div className="from-group">
					<input id="showcleartext" type="checkbox"  onChange={this.handleChange} />Show Clear text to Read only User
				</div>
				<button type="submit" className="btn btn-success btn-lg">Save</button>
				<button type="button" className="btn btn-success btn-lg" onClick={this.togglePopup.bind(this)}>Popup</button>
			  </form>
			</div>
				<div>{pwddetails}</div>
				{this.state.showPopup ? 
				          <Popup
				            text={this.state.password}
				            closePopup={this.togglePopup.bind(this)}
				          />
				          : null
				        }
			</div>
		)
	}
}
export default Passwords;