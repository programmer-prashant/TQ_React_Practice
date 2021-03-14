import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<h1>Hello About Page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe
				nobis doloribus voluptate, nihil enim ut autem cupiditate temporibus
				ratione rem repellat beatae distinctio iste reiciendis est. Enim, non
				ducimus.
			</p>
			<Link to='/'>
				<button>Go to home page</button>
			</Link>
		</div>
	);
};

export default About;
