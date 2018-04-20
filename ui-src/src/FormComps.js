import React,{Component} from 'react';

class FormComps extends React.Component{
	constructor(props){
		super(props);
		this.state={name:'',address:''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.personData = [];
	}
	handleChange(event){
		const fieldName = event.target.name;
		this.setState({[fieldName]:event.target.value});
	}
	handleSubmit(event){
		this.personData.push({name:this.state.name,address:this.state.address});
		console.log(this.personData.length);
		this.setState({name:'',address:''});
		event.preventDefault();
	}
	
	personDetails(){
		const persons = this.personData;
		const plist = persons.map((person,index) => <tr><td>{person.name}</td><td>{person.address}</td></tr>);
		return(
				<div>
					<table border="1">
						<tr><th>Name</th><th>Address</th></tr>
						<tbody>
						{plist}
						</tbody>
						
					</table>
				</div>
		);
		
		//const msgList = msgs.map((msg,index) => <li key={index}>{index}.{msg}</li>);
	}
	render(){
		 const PDetails = this.personDetails();
		 const windowLoc = document.location.pathname;
		return(
				<div>
				<form onSubmit={this.handleSubmit}>
					<label>Name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
					<label>Address:<textarea name="address" value={this.state.address} onChange={this.handleChange}></textarea> </label>
					<input type="submit" value="Submit" />
				</form>
				{PDetails}
				{windowLoc}
			   </div>
		);
	}
}
export default FormComps;
