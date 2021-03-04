import React, { useState } from 'react';

const UseStateDemo = () => {
	const [count, setCount] = useState(0);

	const clickHandler = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={clickHandler}>Increment Count</button>
			<button
				onClick={() => {
					setCount(count + 2);
				}}
			>
				Increment Count by two
			</button>
		</div>
	);
};

export default UseStateDemo;
