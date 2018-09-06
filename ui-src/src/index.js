import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import './App.css';
import './data.json';

ReactDOM.render(
		<Provider store={store}>{router}</Provider>,
		document.getElementById("root"));

//===============employee code starts here=============
//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import {createStore} from 'redux';
//import {Provider} from 'react-redux';
//import allReducers from './reducers';
//import App from './components/app';
//import Employee from './components/employee';
//
//const store = createStore(
//		allReducers
//);
//
//ReactDOM.render(
//<Provider store={store}>
//<Employee />
//</Provider>
//,document.getElementById("root"));
//======== employee code=====end=======

//ReactDOM.render(
//		<Provider store={store}>
//		<Employee />
//		<App/>
//		</Provider>
//		,document.getElementById("root"));
//import LoginController from './LoginController';
//class Clock extends React.Component{
//	constructor(props){
//		super();
//		this.state={date:new Date(),isToggleOn:true};
//		this.handleClick = this.handleClick.bind(this);
//	}
//	
//	componentDidMount(){
//		console.log("componentDidMount");
//		this.timerId=setInterval(() => this.tick(),1000);
//	}
//	componentWillUnmount(){
//		console.log("componentWillUnmount");
//		clearInterval(this.timerID);
//	}
//	tick(){
//		this.setState({date:new Date()});
//	}
//	handleClick(){
//		this.setState(prevState =>({isToggleOn:!prevState.isToggleOn}));
//	}
//	render(){
//		return(
//				<div>
//					<h1>Welcome to components</h1>
//					<hr/>
//					<h2>Time: {this.state.date.toLocaleTimeString()}</h2>
//					<hr/>
//					<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
//				</div>
//		);
//	}
//}
//function App(){
//	return(
//			<div>
//				<Clock date={new Date()}/>
//			</div>
//	);
//}
//ReactDOM.render(<LoginController/>,document.getElementById("root"));
//function Clock(props){
//	return(
//			<div>
//			<h1>Welcome to our Time </h1>
//			<hr/>
//			<h2>Time:{props.date.toLocaleTimeString()}</h2>
//			</div>
//	);
//}
//function tick(){
//	
//ReactDOM.render(<Clock date={new Date()}/>,document.getElementById("root"));
//}
//setInterval(tick,1000);
//function Comment(props){
//	return(
//		<div className="Comment">
//		 <div className="UserInfo"> <img src={props.author.avatarUrl}/></div>
//		 <div className="UserInfo-name">{props.author.name}</div>
//		 <div className="Comment-text"> {props.text}</div>
//		 <div className="Comment-date">{formaterDate(props.date)}</div>
//		</div>
//	);
//}
//function formaterDate(date){
//	return date.toLocaleDateString();
//}
//const comment={
//	date : new Date(),
//	text :'I hope you enjoy learning React!',
//	author:{
//		name:'Hello Kitty',
//		avatarUrl:'http://placekitten.com/g/64/64'
//	},
//};
//ReactDOM.render(<Comment  
//	text={comment.text}
//	author={comment.author} date={comment.date}/>,document.getElementById('root'));

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//const user={
//		firstName : 'John',
//		lastName  : 'Milter'
//}
//function formatName(user){
//	return user.firstName+' '+user.lastName;
//}
//const element=<h1>hello world {formatName(user)}</h1>;
//ReactDOM.render(element,document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
