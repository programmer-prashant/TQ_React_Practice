import React from 'react';

const Ternary_Operator = () => {
	let isLoggedIn = true;
	return (
		<div>{isLoggedIn ? <h1>Hello its True</h1> : <h1>Hello its False</h1>}</div>
	);
};

export default Ternary_Operator;
