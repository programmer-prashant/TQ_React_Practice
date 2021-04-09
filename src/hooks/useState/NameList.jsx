import React, { useState } from 'react';
import NewNameForm from './NewNameForm';

const NameList = () => {
	const [names, setNames] = useState([{ name: 'Prashant', id: 1 }]);

	const addNames = (title, id) => {
		setNames([...names, { title, id }]);
	};
	return (
		<div>
			<ul>
				{names.map((name) => {
					return <li key={name.id}>{name.title}</li>;
				})}
			</ul>
			<NewNameForm addNames={addNames} />
		</div>
	);
};

export default NameList;
