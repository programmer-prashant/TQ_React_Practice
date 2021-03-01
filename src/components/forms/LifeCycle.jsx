import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';

class LifeCycle extends Component {
	constructor(props) {
		super(props);
		console.log('constructor Parent');
		this.state = {
			name: 'sansa',
		};
	}
	static getDerivedStateFromProps() {
		console.log('getDerivedStateFromProps Parent');
		return null;
	}
	componentDidMount() {
		console.log('componentDiDMount Parent');
	}
	render() {
		console.log('render method Parent');
		return (
			<div>
				<h5> life cycle method</h5>
				<LifeCycleChild />
			</div>
		);
	}
}

export default LifeCycle;
