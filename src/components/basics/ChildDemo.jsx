import React from 'react';

const ChildDemo = ({ handler }) => {
	return (
		<div>
			<button onClick={() => handler('Prashant from Child Comp')}>
				Click me
			</button>
		</div>
	);
};

export default ChildDemo;
