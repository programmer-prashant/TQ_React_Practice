import React, { useState } from 'react';
import Admin from './Admin';
import User from './User';

const ConditionalDemo = () => {
	let isLoggedIn = false;
	const [user, setUser] = useState(isLoggedIn);

	return (
		<div>
			<h1>{user}</h1>
			<button onClick={() => setUser(!isLoggedIn ? <Admin /> : <User />)}>
				Change User
			</button>
		</div>
	);
};

export default ConditionalDemo;
