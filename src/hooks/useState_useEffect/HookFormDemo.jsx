// 4. Write a code to get the name and phone no from the user
// show use of useState with object concept
// 6. Write a code to change the state value i.e. default state value {name:’sonali’,id:1}
// and set it to {name:’kalyani’,id:2}
import React, { useState } from 'react';

const HookFormDemo = () => {
	const [name, setName] = useState({ fname: '', lname: '' });
	const [sname, setSName] = useState({ fname: 'Sonali', id: 1 });
	const changeData = () => {
		setSName({ fname: 'Kalyani', id: 2 });
	};
	return (
		<div>
			<form action=''>
				<input
					type='text'
					value={name.fname}
					onChange={(e) => setName({ ...name, fname: e.target.value })}
				/>
				<input
					type='text'
					value={name.lname}
					onChange={(e) => setName({ ...name, lname: e.target.value })}
				/>
				<h2>Your FirstName is - {name.fname}</h2>
				<h2>Your LastName is - {name.lname}</h2>
				<h2>{JSON.stringify(name)}</h2>
				<h2>{`Name : ${sname.fname} Id : ${sname.id}`}</h2>
				<button onClick={changeData}>Change Data</button>
			</form>
		</div>
	);
};

export default HookFormDemo;
