import React,{Component} from 'react';
import FormComps from './FormComps';
import Calculator from './Calculator';

class LoginController extends Component{

	constructor(props){
		super(props);
		console.log("constructor called");
		this.state={isLoggedIn:false,title:'Please Login',messageText:['React','Re:React','Re:Re:React']}
		this.handleLoggedIn=this.handleLoggedIn.bind(this);
		this.handleLoggedOut=this.handleLoggedOut.bind(this);
		this.value1="welcome text";
	}
	
	handleLoggedIn(){
		this.setState({isLoggedIn:true,title:'You LoggedIn as user'});
	}
	handleLoggedOut(){
		this.setState({isLoggedIn:false,title:'Thanks, you loggedout'});
	}
    mailbox(){
		const msgs = this.state.messageText;
		
		if(this.state.isLoggedIn && msgs.length >0){
			const msgList = msgs.map((msg,index) => <li key={index}>{index}.{msg}</li>);
			return(
					<div>
					 <h4>You have {msgs.length} Unread Meassages</h4>
					 <ul>{msgList}</ul>
					 <FormComps/>
					 <h3>{this.value1}</h3>
					 <hr/>
					 <Calculator scale='c'/>
					 <Calculator scale='f'/>
					</div>
			);
		}
	}
    
	render(){
		const isLoggedIn = this.state.isLoggedIn;
		const msgId=this.mailbox();
		const button = isLoggedIn ? (<button onClick={this.handleLoggedOut}>Logout</button>) : (<button onClick={this.handleLoggedIn}>LogIn</button>);
		return(
				<div>
					<h2>{this.state.title}</h2>
					{button}
					{msgId}
					<hr/>
				</div>
		);
	}
}
export default LoginController;


//class LoginControl extends React.Component {
//	  constructor(props) {
//	    super(props);
//	    this.handleLoginClick = this.handleLoginClick.bind(this);
//	    this.handleLogoutClick = this.handleLogoutClick.bind(this);
//	    this.state = {isLoggedIn: false};
//	  }
//
//	  handleLoginClick() {
//	    this.setState({isLoggedIn: true});
//	  }
//
//	  handleLogoutClick() {
//	    this.setState({isLoggedIn: false});
//	  }
//
//	  render() {
//	    const isLoggedIn = this.state.isLoggedIn;
//	    
//	    let button = null;
//	    if (isLoggedIn) {
//	      button = <LogoutButton onClick={this.handleLogoutClick} />;
//	    } else {
//	      button = <LoginButton onClick={this.handleLoginClick} />;
//	    }
//
//	    return (
//	      <div>
//	        <Greeting isLoggedIn={isLoggedIn} />
//	        {button}
//	      </div>
//	    );
//	  }
//	}
//
//	function UserGreeting(props) {
//	  return <h1>Welcome back!</h1>;
//	}
//
//	function GuestGreeting(props) {
//	  return <h1>Please sign up.</h1>;
//	}
//
//	function Greeting(props) {
//	  const isLoggedIn = props.isLoggedIn;
//	  if (isLoggedIn) {
//	    return <UserGreeting />;
//	  }
//	  return <GuestGreeting />;
//	}
//
//	function LoginButton(props) {
//	  return (
//	    <button onClick={props.onClick}>
//	      Login
//	    </button>
//	  );
//	}
//
//	function LogoutButton(props) {
//	  return (
//	    <button onClick={props.onClick}>
//	      Logout
//	    </button>
//	  );
//	}
//
//	ReactDOM.render(
//	  <LoginControl />,
//	  document.getElementById('root')
//	);
