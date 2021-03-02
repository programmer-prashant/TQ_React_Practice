import React, { Component, PureComponent } from 'react';
import MemoComp from '../memo/MemoComp';
import ChildPureComp from './ChildPureComp';
import PureComp from './PureComp';

class ParentPureComp extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Prashant',
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Prashant',
			});
		}, 2000);
	}
	render() {
		console.log('-------Parent Comp Render--------');
		return (
			<div>
				Parent Component
				<MemoComp name={this.state.name} />
				{/* <ChildPureComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
			</div>
		);
	}
}

export default ParentPureComp;
