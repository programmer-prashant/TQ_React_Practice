import React, { Component, useContext } from 'react';
import { UserConsumer } from './UserContex';
export class ComponentD extends Component {
	render() {
		return (
			<UserConsumer>
				{(name) => {
					return <h1>{name}</h1>;
				}}
			</UserConsumer>
		);
	}
}

export default ComponentD;
