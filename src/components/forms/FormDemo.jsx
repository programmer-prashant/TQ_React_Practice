import React, { Component } from 'react';

class FormDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			comments: '',
			topic: 'react',
		};
	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	};
	handleCommentsChange = (e) => {
		this.setState({
			comments: e.target.value,
		});
	};
	handleTopicChange = (e) => {
		this.setState({
			topic: e.target.value,
		});
	};
	handleSubmit = (e) => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
		e.preventDefault();
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor=''>Username : </label>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor=''>Enter your age : </label>
					<input
						type='text'
						value={this.state.comments}
						onChange={this.handleCommentsChange}
					></input>
				</div>
				<div>
					<label htmlFor=''>Toptc : </label>
					<select
						name=''
						id=''
						value={this.state.topic}
						onChange={this.handleTopicChange}
					>
						<option value='react'>React</option>
						<option value='vue'>Vue</option>
						<option value='angular'>Angular</option>
					</select>
				</div>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}

export default FormDemo;
