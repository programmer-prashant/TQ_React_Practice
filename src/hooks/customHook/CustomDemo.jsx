import React, { useState } from 'react';
import useCounter from './useCounter';

const CustomDemo = () => {
	const [count, setCount] = useState(0);
	useCounter(count);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
};

export default CustomDemo;
