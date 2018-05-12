import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Employee from './components/employee';
import User from './components/app';
import Article from './components/article';
import Person from './FormComps';

const divMenu ={
		padding: 80,
}
export default(
		<Router>
		  <div>
			<div className="container-fluid">
				 <div className="row">
					  <div className="col-sm-2">Company Logo</div>
					  <div className="col-sm-10">  ABCXYZ ...  </div>
				</div>
			    <div className="row">
					<div className="col-sm-2"></div>
					<div className="col-sm-10">
						<span style={divMenu}><Link to="/">Home</Link></span>
						<span style={divMenu}><Link to="/user">User</Link></span>
						<span style={divMenu}><Link to="/employee">Employee</Link></span>
						<span style={divMenu}><Link to="/article">Article</Link></span>
						<span style={divMenu}><Link to="/person">Person</Link></span>
					</div>
			     </div>
			     <div className="row">
			     <div className="col-sm-2"></div>
					<div className="col-sm-10">
						<Route path="/employee" component={Employee}/>
						<Route path="/user" component={User}/> 
						<Route path="/article" component={Article}/> 
						<Route path="/person" component={Person}/>
					</div>
			     </div>
			 </div>
		  </div>
		</Router>
);
