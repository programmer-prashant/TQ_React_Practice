import React, { Component } from 'react';

export class ChildPureComp extends Component {
	render() {
		console.log('*****Regular Comp*****');
		return <div>Child Comp {this.props.name}</div>;
	}
}

export default ChildPureComp;
