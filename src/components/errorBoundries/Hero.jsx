import React from 'react';

const Hero = ({ heroName }) => {
	if (heroName === 'joker') {
		throw new Error('Not a hero!');
	}
	return (
		<div>
			<h1>{heroName}</h1>
		</div>
	);
};

export default Hero;
