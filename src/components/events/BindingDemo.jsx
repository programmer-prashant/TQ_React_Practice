import React, { Component } from 'react';

class BindingDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: 'Hello Every one',
		};
		// 3rd way
		// this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		this.setState({
			msg: 'Awesome',
		});
	};
	render() {
		return (
			<div>
				<h1>{this.state.msg}</h1>
				{/* 1st way {this.handleClick.bind(this)} 
				<button onClick={this.handleClick.bind(this)}>Chane Msg</button>
				2nd Way {() => this.handleClick()}
				<button onClick={() => this.handleClick()}>Chane Msg</button>
				<button onClick={this.handleClick}>Chane Msg</button>
                    4th way use arrow functions instade of simple function 
                */}
				<button onClick={this.handleClick}>Chane Msg</button>
			</div>
		);
	}
}

export default BindingDemo;
