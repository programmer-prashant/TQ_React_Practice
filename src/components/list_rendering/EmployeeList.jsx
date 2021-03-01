import React from 'react';
import Employee from './Employee';

const EmployeeList = () => {
	const employee = [
		{
			id: 1,
			author: 'Prashant',
			timeAgo: 'Today at 4:45PM',
			content: 'I am MERN stack developer',
		},
		{
			id: 2,
			author: 'Gaurav',
			timeAgo: 'Today at 3:32PM',
			content: 'I am Java Programmer',
		},
		{
			id: 3,
			author: 'Anjali',
			timeAgo: 'Today at 10.43AM',
			content: 'I like to cook',
		},
	];

	const employeeList = employee.map((e) => <Employee emp={e} key={e.id} />);
	return <div>{employeeList}</div>;
};

export default EmployeeList;
