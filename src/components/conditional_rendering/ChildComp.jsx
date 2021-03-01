import React from 'react';

const ChildComp = ({ handler }) => {
	return (
		<div>
			<button onClick={() => handler('From Child Component')}>Click</button>
		</div>
	);
};

export default ChildComp;
