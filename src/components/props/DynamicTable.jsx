import React from 'react';
import Table from 'react-bootstrap/Table';
const DynamicTable = (props) => {
	const data = props.tdata;

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Time</th>
					<th>Comment</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => {
					return (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.author}</td>
							<td>{item.timeAgo}</td>
							<td>{item.content}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export default DynamicTable;
