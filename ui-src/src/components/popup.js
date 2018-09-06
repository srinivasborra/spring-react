import React from 'react';

class Popup extends React.Component{
	constructor(){
		super();
	}
	render(){
			return(
					<div className='popup'>
			        <div className='popup_inner'>
			          <h1>{this.data.password}</h1>
			          <center><button onClick={this.props.closePopup}>close me</button></center>
			        </div>
			      </div>	
			);
	}
}
export default Popup;