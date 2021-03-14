// 5. Write a code render useEffect only if the count is going to change
// 7. Implement a useEffect that firing by click event listener.(hint: if I click on screen
// the event should fire) show the msg ‘clciked event fired’ either in the console or
// alert box

import React, { useState, useEffect } from 'react';

const UseEffectHookDemo = () => {
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

export default UseEffectHookDemo;
