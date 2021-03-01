import React, { Component } from 'react';

class DestructuringClass extends Component {
	render() {
		const { hero, ability } = this.props;
		return (
			<div>
				<h2>
					Hero name is {hero} he can {ability}{' '}
				</h2>
			</div>
		);
	}
}
export default DestructuringClass;
