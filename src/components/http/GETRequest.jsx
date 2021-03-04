import React, { Component } from 'react';
import axios from 'axios';

class GETRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				console.log(res);
				this.setState({
					posts: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		const { posts } = this.state;
		return (
			<div>
				{posts.length
					? posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
					: null}
			</div>
		);
	}
}

export default GETRequest;
