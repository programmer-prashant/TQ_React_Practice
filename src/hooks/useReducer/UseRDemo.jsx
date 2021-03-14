import React, { useReducer } from 'react';

const UseRDemo = () => {
	const iState = 'Prashant';
	const reducer = (state, action) => {
		switch (action) {
			case 'CHANGE_NAME':
				return 'Gaurav';

			default:
				return state;
		}
	};
	const [name, dispatch] = useReducer(reducer, iState);

	return (
		<div>
			<h1>Programmers never Quit</h1>
			<h2>My Name is {name}</h2>
			<button onClick={() => dispatch('CHANGE_NAME')}>Chane Name</button>
		</div>
	);
};

export default UseRDemo;
