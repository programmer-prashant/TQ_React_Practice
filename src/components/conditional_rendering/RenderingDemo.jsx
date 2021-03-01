import React, { Component } from 'react';

class RenderingDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: !false,
		};
	}

	render() {
		if (this.state.isLoggedIn) {
			return (
				<div>
					<h1>Welcome to React</h1>
				</div>
			);
		} else {
			return <h1>Hello Prashant</h1>;
		}
	}
}

export default RenderingDemo;
