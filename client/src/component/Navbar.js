import React from 'react';

function Navbar() {
	return (
		<div className='container'>
			<nav className='navbar navbar-expand-lg navbar-light bg-dark'>
				<a className='navbar-brand text-light' href='/'>
					Make Your Todo
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<a className='nav-link text-light' href='#'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-light' href='#'>
								Expired Todo
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-light' href='#'>
								Completed Todo
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
