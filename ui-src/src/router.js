import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import User from './components/user';
import Passwords from './components/passwords';
import Article from './components/article';
import Person from './FormComps';
import EmpDataScrollTable from './components/empdata-scrolltable';
import FilePermissions from './components/filepermissions';


export default(
		<Router>
		<div>
		 		<div className="topbanner">
		 			<div className="pageheader">Header</div>
		 		</div>
		  		<div>
		 		<div className="sidenav">
		  			<div className="leftmenu">
			  			<Link to="/user"><span>User</span></Link>
			  			<Link to="/passwords"><span>Password</span></Link>
			  			<Link to="/history"><span>History</span></Link>
			  			<Link to="/filepermissions"><span>File Permissions</span></Link>
			  			<Link to="/logout"><span>Logout</span></Link>
		  			</div>
		  		</div>
		  		<div class="content">
		  			<Route path="/user" component={User}/>
		  			<Route path="/passwords" component={Passwords}/>
		  			<Route path="/article" component={Article}/> 
		  			<Route path="/person" component={Person}/>
		  			<Route path="/filepermissions" component={FilePermissions}/>
		  		</div>
		  		</div>
		 </div>
		</Router>
);

