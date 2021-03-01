import React from 'react';

const CreateElementDemo = () => {
	return React.createElement(
		'div',
		null,
		React.createElement('h1', null, 'Welcome React'),
		React.createElement('p', null, 'Hello Thinquotient')
	);
};

export default CreateElementDemo;
