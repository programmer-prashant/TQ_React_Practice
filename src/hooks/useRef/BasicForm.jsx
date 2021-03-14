import React, { useRef, useState } from 'react';

const BasicForm = () => {
	const myName = useRef(null);
	const [show, setShow] = useState(false);

	const submitForm = (e) => {
		e.preventDefault();
		const name = myName.current.value;
		name === '' ? alert('Please Fill the data') : setShow(true);
	};
	return (
		<>
			<form action='' onSubmit={submitForm}>
				<div>
					<label htmlFor='myName'>
						<input type='text' id='myName' ref={myName} />
					</label>
				</div>
				<br />
				<button>Submit</button>
			</form>
			<h3>{show ? `Your Name is ${myName.current.value}` : ''}</h3>
		</>
	);
};

export default BasicForm;
