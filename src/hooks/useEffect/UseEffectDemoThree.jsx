import React, { useState, useEffect } from 'react';

const UseEffectDemoThree = () => {
	const [X, setX] = useState(0);
	const [Y, setY] = useState(0);

	const logMousePosition = (e) => {
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('useEffect called');
		window.addEventListener('mousemove', logMousePosition);
	}, []);
	return (
		<div>
			Hooks X = {X} Y = {Y}
		</div>
	);
};

export default UseEffectDemoThree;
