import React, { useState, useEffect } from 'react';
import api from '../api';
import DatePicker from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import TodoList from './TodoList';

const Home = (props) => {
	const [tododata, settododata] = useState([]);
	const [loading, setloading] = useState(true);
	const getTodoList = async () => {
		const res = await api.get('/get');

		settododata(res.data);
		setloading(false);
	};

	useState(() => {
		getTodoList();
	}, []);

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
			const p = document.createElement('p');
			p.innerHTML = 'Please Provide future date';
			const div = document.querySelector('.error');
			div.style.color = 'red';

			div.append(p);
			setTimeout(() => {
				p.innerHTML = '';
			}, 3000);
		}
	};
	const { tododesc, todoname } = form;
	const onchangehandler = (e) =>
		setform({ ...form, [e.target.name]: e.target.value });
	const submithandler = async (e) => {
		e.preventDefault();

		if (
			tododesc.length > 1 &&
			todoname.length > 1 &&
			date.duedate.length !== 0
		) {
			let body = { ...date, ...form };
			const res = await api.post('/post', body);

			getTodoList();
		} else {
			const p = document.createElement('p');
			p.innerHTML = 'Please Provide future date';
			const div = document.querySelector('.error');
			div.style.color = 'red';

			div.append(p);
			setTimeout(() => {
				p.innerHTML = '';
			}, 3000);
		}
	};
	return (
		<>
			<section className='maincontainer'>
				<section className='form'>
					<form action=''>
						<div className='error'></div>
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
							<DatePicker
								onDayChange={(day) => dateHandler(day)}
							/>
						</div>
						<button
							type='submit'
							onClick={(e) => submithandler(e)}
							id='submit'>
							Submit
						</button>
					</form>
				</section>
				<section>
					<TodoList data={tododata} />
				</section>
			</section>
		</>
	);
};

export default Home;
