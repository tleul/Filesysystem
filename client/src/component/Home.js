import React, { useState } from 'react';

import DatePicker from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
const Home = (props) => {
	const [date, setdate] = useState({
		duedate: '',
	});
	const [form, setform] = useState({
		todoname: '',
		tododesc: '',
	});
	const dateHandler = (day) => {
		let datecheck = moment(day).diff();
		if (datecheck > 0) {
			setdate({ duedate: moment(day) });
		} else {
			console.log('past');
		}
	};
	const { tododesc, todoname } = form;
	const onchangehandler = (e) =>
		setform({ ...form, [e.target.name]: e.target.value });
	const submithandler = (e) => {
		e.preventDefault();
		let body = { ...date, ...form };
		console.log(body);
	};
	return (
		<>
			<div className='form'>
				<form action=''>
					<label htmlFor='todoname'>Title</label>
					<div>
						<input
							type='text'
							name='todoname'
							onChange={(e) => onchangehandler(e)}
							value={todoname}
							id='todoname'
						/>
					</div>
					<label htmlFor='tosodesc'>Descritpion</label>
					<div>
						<textarea
							type='text'
							onChange={(e) => onchangehandler(e)}
							value={tododesc}
							name='tododesc'
							id='tododesc'
						/>
					</div>{' '}
					<label htmlFor='duedate'> Due Date</label>
					<div className='daypicker'>
						<DatePicker onDayChange={(day) => dateHandler(day)} />
					</div>
					<button
						type='submit'
						onClick={(e) => submithandler(e)}
						name=''
						id='submit'>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Home;
