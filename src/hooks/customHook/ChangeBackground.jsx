import React, { useState } from 'react';
import './ChangeBgColor.css';

const ChangeBackground = () => {
	const [toggle, setToggle] = useState(false);
	const toggleIt = () => {
		setToggle(!toggle);
	};
	return (
		<div>
			<div>
				<div className={toggle && 'body-color'}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						nemo consequatur rem autem voluptatum? Iste rerum eaque, inventore
						animi, pariatur obcaecati dolore explicabo placeat nostrum quod quae
						ipsam ipsum perferendis.
					</p>
					<button onClick={toggleIt} className='btn btn-warning'>
						{toggle ? 'Change to normal' : 'Change to black'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChangeBackground;
