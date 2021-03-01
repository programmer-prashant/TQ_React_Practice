import React, { Component } from 'react';

class Uncontrolled extends Component {
	constructor(props) {
		super(props);

		//    this.inputRef= React.createRef();
		this.cbRef = null;
		this.setCallBack = (element) => {
			this.cbRef = element;
		};
	}
	componentDidMount() {
		// console.log(this.inputRef)
		// this.inputRef.current.focus()
		if (this.cbRef) {
			this.cbRef.focus();
		}
	}
	clickHandler = () => {
		alert(this.inputRef.current.value);
	};
	render() {
		return (
			<div>
				<form>
					<input type='text' ref={this.setCallBack} />

					{/* <input type='text' ref={this.inputRef}/>
                    <button onClick={this.clickHandler}> show </button> */}
				</form>
			</div>
		);
	}
}

export default Uncontrolled;
