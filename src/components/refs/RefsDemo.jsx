import React, { Component } from 'react';

class RefsDemo extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
		this.cbRef = null;
		this.setCbRef = (element) => {
			this.setCbRef = element;
		};
	}

	componentDidMount() {
		if (this.setCbRef) {
			this.setCbRef.focus();
		}
		// console.log(this.inputRef);
		// this.inputRef.current.focus();
	}
	clickHandler = () => {
		alert(this.inputRef.current.value);
	};
	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} />
				<input type='text' ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
