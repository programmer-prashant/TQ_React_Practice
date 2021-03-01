class App extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement('h1', null, 'Hello User'),
			React.createElement('p', null, 'Welcome to React Page')
		);
	}
}

ReactDOM.render(
	React.createElement(App, null),
	document.getElementById('root')
);
