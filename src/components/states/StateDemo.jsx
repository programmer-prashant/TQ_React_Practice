import React, { Component } from 'react';

export class StateDemo extends Component {
	state = {
		name: 'Prashant',
		age: 22,
	};
	render() {
		return (
			<div>
				<h2>{this.state.name}</h2>
				<h4>I am {this.state.age} years old</h4>
			</div>
		);
	}
}

export default StateDemo;
