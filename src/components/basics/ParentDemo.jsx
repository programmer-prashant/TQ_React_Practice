import React, { Component } from 'react';
import ChildDemo from './ChildDemo';

class ParentDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: 'This is Coming From Parent Component',
		};
	}
	clickHandler = (val) => {
		alert(`${this.state.msg} ${val}`);
	};
	render() {
		return (
			<div>
				<ChildDemo handler={this.clickHandler} />
			</div>
		);
	}
}

export default ParentDemo;
