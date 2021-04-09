import React, { useContext } from 'react';

const HookContext = () => {
	const name = useContext(NameContext);
	const age = useContext(AgeContext);
	return (
		<div>
			<div>
				Name: {name}, Age: {age}
			</div>
		</div>
	);
};

export default HookContext;
