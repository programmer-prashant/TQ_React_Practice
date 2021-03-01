import React from 'react';

const FunctionalCompEvent = () => {
	const handleClick = () => {
		alert('You Clicked Button in Functional Component');
	};
	return (
		<div>
			<h2>Event Handling in Functional Component</h2>
			<button onClick={handleClick}>Click Me</button>
			<button
				onClick={(e) => {
					alert('Inline Function Invoked in Functional Component');
				}}
			>
				Inline
			</button>
		</div>
	);
};

export default FunctionalCompEvent;
