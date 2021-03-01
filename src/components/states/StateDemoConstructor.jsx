import React, { Component } from 'react';

export class StateDemoConstructor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Gaurav',
			age: 23,
			hobby: this.props.hobby,
		};
	}

	render() {
		return (
			<div>
				<h2>{this.state.name}</h2>
				<h4>I am {this.state.age} years old</h4>
				<p>I like to play {this.state.hobby}</p>
			</div>
		);
	}
}

export default StateDemoConstructor;
