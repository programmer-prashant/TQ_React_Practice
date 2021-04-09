import React, { useState } from 'react';

const CounterUseState = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
		</div>
	);
};

export default CounterUseState;
