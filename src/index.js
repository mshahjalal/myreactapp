import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		    <Route exact={true} path='/' component={Home} />
		    <Route path='/about' component={About} />
		    <Route path='/contact' component={Contact} />
	    </div>
	</BrowserRouter>, 
	document.getElementById('root')
);