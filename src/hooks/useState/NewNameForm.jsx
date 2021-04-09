import React, { useState } from 'react';

const NewNameForm = ({ addNames }) => {
	const [title, setTitle] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title);
		addNames(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>Add Name : </label>
			<input
				type='text'
				value={title}
				required
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input type='submit' value='Add Names' />
		</form>
	);
};

export default NewNameForm;
