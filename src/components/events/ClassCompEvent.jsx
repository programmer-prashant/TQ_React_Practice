import React, { Component } from 'react';

class ClassCompEvent extends Component {
	render() {
		const handleClick = () => {
			alert('You Clicked Button');
		};
		return (
			<div>
				<h1>Event Handling in class Component</h1>
				<button onClick={handleClick}>Click Me</button>
				<button
					onClick={(e) => {
						alert('Inline Function Invoked');
					}}
				>
					Inline
				</button>
			</div>
		);
	}
}

export default ClassCompEvent;
