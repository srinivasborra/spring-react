import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Employee from './components/employee';
import User from './components/app';

export default(
		<Router>
		  <div>
		    <ul>
		      <li><Link to="/">Home</Link></li>
		      <li><Link to="/employee">Employee</Link></li>
		      <li><Link to="/user">User</Link></li>
		    </ul>
		    <hr/>

		    // All 3 components below would be rendered when in a homepage
		    <Route exact path="/" component={Employee}/>
		    <Route exact path="/" component={User}/>

		    <Route path="/employee" component={Employee}/>
		    <Route path="/user" component={User}/>
		  </div>
		</Router>
);