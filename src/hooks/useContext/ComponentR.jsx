import React, { useContext } from 'react';
import { sendContext } from '../../App';

const ComponentR = () => {
	const name = useContext(sendContext);
	return (
		<div>
			<h1>Hello {name}</h1>
		</div>
	);
};

export default ComponentR;
