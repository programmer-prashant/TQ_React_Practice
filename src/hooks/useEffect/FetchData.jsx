import React, { useState, useEffect } from 'react';

const FetchData = () => {
	const [users, setUsers] = useState([]);

	const getData = async () => {
		const response = await fetch('https://api.github.com/users');
		setUsers(await response.json());
	};

	useEffect(() => {
		getData();
	}, []);

	return <></>;
};

export default FetchData;
