import React from 'react';
import data from './data';

const MapDemoTwo = () => {
	let comments = data.map((comment) => {
		return <h3>{comment.content}</h3>;
	});
	return <div>{comments}</div>;
};

export default MapDemoTwo;
