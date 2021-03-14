import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComp from './NavComp';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ErrorPage from './ErrorPage';

const Main = () => {
	return (
		<BrowserRouter>
			<NavComp />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/about' component={About} />
				<Route component={ErrorPage} />
			</Switch>
			{/* <Home />
			<Contact />
			<About /> */}
		</BrowserRouter>
	);
};

export default Main;
