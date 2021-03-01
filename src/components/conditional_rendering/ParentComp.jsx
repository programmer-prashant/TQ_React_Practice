import React from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
	const ParentMethod = (val) => {
		alert(`This is Parent Component and data is comming ${val}`);
	};
	return (
		<div>
			<ChildComp handler={ParentMethod} />
		</div>
	);
};

export default ParentComp;
