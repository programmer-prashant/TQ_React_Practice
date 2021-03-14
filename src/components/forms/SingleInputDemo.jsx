import React, { Component } from 'react';

class SingleInputDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
		};
	}
	handleNameChange = (e) => {
		const name = e.target.value;
		this.setState({
			name,
		});
	};
	render() {
		return (
			<div>
				<form action=''>
					<label htmlFor=''>Enter Your Name : </label>
					<input
						type='text'
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
					<h1>{this.state.name}</h1>
				</form>
			</div>
		);
	}
}

export default SingleInputDemo;
