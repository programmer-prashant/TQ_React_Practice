import React from 'react';

const Detructuring = ({ name, roll }) => {
	//second way
	// const { name, roll } = props;
	return (
		<div>
			<p>
				Hello {name} your roll number is {roll}
			</p>
		</div>
	);
};

export default Detructuring;
