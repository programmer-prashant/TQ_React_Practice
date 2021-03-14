// 11. What is react hooks? And what are the rules to be followed when you are dealing
// with hooks?

import React, { useState } from 'react';
import Admin from './Admin';
import User from './User';

const ConditionalDemo = () => {
	const [user, setUser] = useState(false);

	return (
		<div>
			<h1>{user ? <Admin /> : <User />}</h1>
			<button onClick={() => setUser(!user)}>Change User</button>
		</div>
	);
};

export default ConditionalDemo;
