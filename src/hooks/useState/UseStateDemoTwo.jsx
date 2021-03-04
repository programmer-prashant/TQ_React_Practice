import React, { useState } from 'react';

const UseStateDemoTwo = () => {
	const [name, setName] = useState({ fname: '', lname: '' });
	return (
		<div>
			<form action=''>
				<input
					type='text'
					placeholder='Enter First Name'
					value={name.fname}
					onChange={(e) => setName({ ...name, fname: e.target.value })}
				/>
				<input
					type='text'
					placeholder='Enter Last Name'
					value={name.lname}
					onChange={(e) => setName({ ...name, lname: e.target.value })}
				/>
				<h2>Your First Name is : {name.fname}</h2>
				<h2>Your Last Name is : {name.lname}</h2>
				<p>{JSON.stringify(name)}</p>
			</form>
		</div>
	);
};

export default UseStateDemoTwo;
