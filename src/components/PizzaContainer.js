import React from 'react';
import { buyPizza } from '../redux/Pizza/PizzaActions';
// import {buyPizza} from '../Redux'
import { connect } from 'react-redux';
function PizzaContainer(props) {
	return (
		<div>
			<h1> Number of pizza = {props.numOfPizza}</h1>
			<button onClick={props.buyPizza} className='btn btn-danger'>
				Buy Pizza
			</button>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		numOfPizza: state.numOfPizza,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyPizza: () => dispatch(buyPizza()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
