import React from 'react';

const RenderingFunc = () => {
	let isLoggedIn = false;
	if (isLoggedIn) return <h1>Hello If Block</h1>;
	else return <h1>Hello Else Block</h1>;
};

export default RenderingFunc;
