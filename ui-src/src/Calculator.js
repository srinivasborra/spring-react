import React from 'react';

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state={tempature:'70'};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.setState({tempature:e.target.value});
	}
	render(){
		const tempature = this.state.tempature;
		const scale = this.props.scale;
		return(
				<div>
					<fieldset>
					<legend>Enter Tempature in {scaleName[scale]}</legend>
					<input   value={tempature} onChange={this.handleChange}/>
					<BoilingVerdict celsius={tempature}/>
					<input type="submit" value="Submit"/>
				    </fieldset>
				</div>
		);
	}
}
function BoilingVerdict(props){
	if(props.celsius >=100){
		return <div><p>The Water would boil at {props.celsius}.</p> <ShowMessage/> </div>;
	}
		return <p>The Water would not boil at {props.celsius}.</p>;
}
function ShowMessage(){
	return <p>Show Messages here</p>;
}
const scaleName ={c : 'Celsius', f :'Fahrenheit'};
export default Calculator;