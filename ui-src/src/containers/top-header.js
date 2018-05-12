import React,{Component} from 'react';
import {connect} from 'react-redux';

class TopHeader extends React.Component{
	render(){
		console.log(this.props.otherdetails);
		return(
				<div>{this.props.otherdetails.usertitle}</div>
		);
	}
}
function mapStateToProps(state){
	return{otherdetails:state.otherDetails};
	
}
export default connect(mapStateToProps)(TopHeader);