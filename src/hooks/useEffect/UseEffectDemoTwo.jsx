import React, { useState, useEffect } from 'react';

const UseEffectDemoTwo = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	useEffect(() => {
		console.log('useEffect - Updating document title Two');
		document.title = `You clicked ${count} times`;
	}, [name]);
	return (
		<form>
			<input
				type='text'
				value={name}
				required
				onChange={(e) => setName(e.target.value)}
			/>
			<input onClick={() => setCount(count + 1)} type='submit' />
		</form>
	);
};

export default UseEffectDemoTwo;
