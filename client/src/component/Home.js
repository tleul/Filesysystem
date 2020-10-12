import React from 'react';

const Home = () => {
	return (
		<>
			<div className='form'>
				<form action=''>
					<label htmlFor='todoname'>Title</label>
					<div>
						<input type='text' name='' id='todoname' />
					</div>
					<label htmlFor='tosodesc'>Descritpion</label>
					<div>
						<textarea type='text' name='' id='tododesc' />
					</div>{' '}
					<label htmlFor='duedate'> Due Date</label>
					<div>
						<input type='text' name='' id='duedate' />
					</div>
					<input type='submit' name='' id='submit' />
				</form>
			</div>
		</>
	);
};

export default Home;
