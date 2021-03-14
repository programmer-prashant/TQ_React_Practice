// 1. Write a code to change the state value i.e. default value of state red and set it to
// black after the 3 sec using functional component
// 2. Write a code to create a timer in which the value of the counter should
// increment by 1 after every second and on click of stop button it should stop
// counting
// 3. Show use of useState hook which is going to display random numbers between
// 1-100 on button click
// 9. Create a calculator which has functionality of addition reset multiplication and
// division using useState

import React, { useState } from 'react';

const HoockCounterDemo = () => {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState('red');
	const [random, setRandom] = useState(0);
	let inState = 0;
	const [clCount, setClcount] = useState(inState);

	const changeColor = () => {
		setTimeout(() => {
			setColor('black');
		}, 3000);
	};

	let timerRef;
	const incrementCount = () => {
		timerRef = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
	};

	const stopCount = () => {
		clearInterval(timerRef);
	};

	let cnt = Math.floor(Math.random() * 100);
	const RandomClick = () => {
		setTimeout(() => {
			setRandom(cnt);
		}, 1000);
	};
	return (
		<div>
			<h1>{color}</h1>
			<button onClick={changeColor}>Change Color</button>
			<h1>{count}</h1>
			<button onClick={incrementCount}>Start Count</button>
			<button onClick={stopCount}>Stop Count</button>
			<h1>Random Count - {random}</h1>
			<button onClick={RandomClick}>Generate Random Number</button>

			<h1>{clCount}</h1>
			<button onClick={() => setClcount(inState)}>Reset</button>
			<button onClick={() => setClcount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setClcount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
		</div>
	);
};

export default HoockCounterDemo;
