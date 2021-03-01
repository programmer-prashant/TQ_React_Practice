import React from 'react';

const ShortCircuit = () => {
	let isLoggedIn = true;
	return isLoggedIn && <h1>Hello There</h1>;
};

export default ShortCircuit;
