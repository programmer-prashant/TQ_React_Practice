import React from 'react';
import { Link } from 'react-router-dom';
const NavComp = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand text-white' href='#'>
						Routing Demo
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse '
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav me-auto ml-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link to='/'>
									<a
										className='nav-link active text-white'
										aria-current='page'
										href='#'
									>
										Home
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact'>
									<a
										className='nav-link text-white'
										aria-current='page'
										href='#'
									>
										Contact
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/about'>
									<a
										className='nav-link text-white'
										aria-current='page'
										href='#'
									>
										About
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavComp;
