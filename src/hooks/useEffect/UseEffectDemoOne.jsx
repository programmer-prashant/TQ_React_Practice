import React, { useState, useEffect } from 'react';

const UseEffectDemoOne = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('useEffect - Updating document title One');
		document.title = `You clicked ${count} times`;
	});
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
				useEffect - click {count} times
			</button>
		</div>
	);
};

export default UseEffectDemoOne;
