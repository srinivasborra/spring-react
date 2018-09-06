import React from 'react';
import '../App.css';



class FilePermissions extends React.Component{
	constructor(){
		super();
		this.state={chown:['-','-','-','-','-','-','-','-','-'],ownercnt:0,groupcnt:0,othercnt:0};
		this.handleChange = this.handleChange.bind(this);
		this.handleSelectAll = this.handleSelectAll.bind(this);
		this.handleClearAll = this.handleClearAll.bind(this);
		
	}
	handleChange(event){
		let wcnt=parseInt(this.state.ownercnt);
		let gcnt=parseInt(this.state.groupcnt);
		let ocnt=parseInt(this.state.othercnt);
		let cmd=this.state.chown;
		let selval = event.target.value;
		if(event.target.checked){
			if(selval === "owr"){
				cmd[0]='r';
				wcnt=wcnt+4;
				this.setState({ownercnt:4});
			}  if(selval === "oww"){
				cmd[1]='w';
				wcnt=wcnt+2;
				this.setState({ownercnt:2});
			}  if(selval === "owx"){
				cmd[2]='x';
				wcnt=wcnt+1;
				this.setState({ownercnt:1});
			}
			if(selval === "grr"){
				cmd[3]='r';
				gcnt=gcnt+4;
				this.setState({groupcnt:4});
			}  if(selval === "grw"){
				cmd[4]='w';
				gcnt=gcnt+2;
				this.setState({groupcnt:2});
			}  if(selval === "grx"){
				cmd[5]='x';
				gcnt=gcnt+1;
				this.setState({groupcnt:1});
			}
			if(selval === "otr"){
				cmd[6]='r';
				ocnt=ocnt+4;
				this.setState({othercnt:4});
			}  if(selval === "otw"){
				cmd[7]='w';
				ocnt=ocnt+2;
				this.setState({othercnt:2});
			}  if(selval === "otx"){
				cmd[8]='x';
				ocnt=ocnt+1;
				this.setState({othercnt:1});
			}
		}else if(!event.target.checked){
			if(selval === "owr"){
				cmd[0]='-';
				wcnt=wcnt-4;
			}  if(selval === "oww"){
				cmd[1]='-';
				wcnt=wcnt-2;
			}  if(selval === "owx"){
				cmd[2]='-';
				wcnt=wcnt-1;
			}
			if(selval === "grr"){
				cmd[3]='-';
				gcnt=gcnt-4;
			}  if(selval === "grw"){
				cmd[4]='-';
				gcnt=gcnt-2;
			}  if(selval === "grx"){
				cmd[5]='-';
				gcnt=gcnt-1;
			}
			if(selval === "otr"){
				cmd[6]='-';
				ocnt=ocnt-4;
			}  if(selval === "otw"){
				cmd[7]='-';
				ocnt=ocnt-2;
			}  if(selval === "otx"){
				cmd[8]='-';
				ocnt=ocnt-1;
			}
		}
		this.setState({chown:cmd,ownercnt:wcnt,groupcnt:gcnt,othercnt:ocnt});
	}
	handleSelectAll(){
		this.setState({chown:['r','w','x','r','w','x','r','w','x'],ownercnt:7,groupcnt:7,othercnt:7});
	}
	handleClearAll(){
		this.setState({chown:['-','-','-','-','-','-','-','-','-'],ownercnt:0,groupcnt:0,othercnt:0});
	}
	render(){
		return(
					<div>
						<div className="from-group">
						<table className="table" className="">	
						<tr><th scope="col">Owner</th><th scope="col">Group</th><th scope="col">Other</th></tr>
						<tr className="table-primary">
							<td><input type="checkbox" className="form-check-input" value='owr' onChange={this.handleChange} checked={this.state.chown[0]==='r'}/>Read</td>
							<td><input type="checkbox" className="form-check-input" value='grr' onChange={this.handleChange} checked={this.state.chown[3]==='r'}/>Read</td>
							<td><input type="checkbox" className="form-check-input" value='otr' onChange={this.handleChange} checked={this.state.chown[6]==='r'}/>Read</td>
						</tr>
						<tr className="table-primary">
							<td><input type="checkbox" className="form-check-input" value='oww' onChange={this.handleChange} checked={this.state.chown[1]==='w'}/>Write</td>
							<td><input type="checkbox" className="form-check-input" value="grw" onChange={this.handleChange} checked={this.state.chown[4]==='w'}/>Write</td>
							<td><input type="checkbox" className="form-check-input" value='otw' onChange={this.handleChange} checked={this.state.chown[7]==='w'}/>Write</td>
						</tr>
						<tr className="table-primary">
							<td><input type="checkbox" className="form-check-input" value='owx' onChange={this.handleChange} checked={this.state.chown[2]==='x'}/>Execute</td>
							<td><input type="checkbox" className="form-check-input" value='grx' onChange={this.handleChange} checked={this.state.chown[5]==='x'}/>Execute</td>
							<td><input type="checkbox" className="form-check-input" value='otx' onChange={this.handleChange} checked={this.state.chown[8]==='x'}/>Execute</td>
						</tr>
							<tr><td><label htmlFor="fpermissions">Permissions</label></td><td><label htmlFor="npermissions">Number</label></td><td></td></tr>
							<tr><td><input type="text" id="fpermissions" className="form-control" value={this.state.chown.join('')} /></td>
							   <td><input type="text" id="npermissions" className="form-control" value={this.state.ownercnt+''+ this.state.groupcnt+''+this.state.othercnt}/></td>
							   <td><button onClick={this.handleSelectAll}>All Permissions</button><button onClick={this.handleClearAll}>Clear All</button></td>
							   </tr>
							</table>
						</div>
					</div>
		);
	}
}

export default FilePermissions;