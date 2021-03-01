import React from 'react';
import data from './data';

const MapDemo = () => {
	return (
		<div>
			{data.map((emp) => {
				return <h1>{emp.author}</h1>;
			})}
		</div>
	);
};

export default MapDemo;
