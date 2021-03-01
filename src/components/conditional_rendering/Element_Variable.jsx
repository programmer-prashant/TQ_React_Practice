import React from 'react';

const Element_Variable = () => {
	let result;
	let isLoggedIn = false;
	if (isLoggedIn) {
		result = <h1>If Block</h1>;
	} else {
		result = <h1>Else Block</h1>;
	}
	return <div>{result}</div>;
};

export default Element_Variable;
