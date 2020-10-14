import React, { useState, useEffect } from 'react';
import api from '../api';
import moment from 'moment';
const TodoList = ({ data }) => {
	useEffect(() => {
		settododata(data);
	}, [data]);
	const [tododata, settododata] = useState([]);
	const deletetodo = async (id) => {
		let res = await api.delete(`/delete/${id}`);
		settododata(res.data);
	};
	const checkExpiration = (duedate) => {
		let today = moment();
		let duedatemom = moment(duedate);

		console.log(duedatemom.diff(today));
	};
	const edithandler = (todo) => {
		const inputtitle = document.querySelector(`.tite-${todo.id}`);
		const inputdesc = document.querySelector(`.name-${todo.id}`);
		const inputdate = document.querySelector(`.date-${todo.id}`);
		inputtitle.style.display = 'block';
		inputdesc.style.display = 'block';
		inputdate.style.display = 'block';
		inputtitle.value = todo.title;
		inputdesc.value = todo.desc;
		inputdate.value = todo.duedate;
		const btn = document.querySelector(`.btn-${todo.id}`);
		btn.style.display = 'none';
		const divedit = document.querySelector(`.edit-${todo.id}`);

		const btnsubmit = document.createElement('button');
		btnsubmit.innerHTML = 'Submit';
		divedit.appendChild(btnsubmit);
		divedit.addEventListener('click', async function () {
			//TODO
			// const res = await api.put('/put', { body: 'test' });
			let newtitle = inputtitle.value;
			let newdesc = inputdesc.value;
			let newduedate = inputdate.value;
			console.log({ newtitle, newdesc, newduedate });
		});
		console.log(btnsubmit);
		// const input = document.createElement('input');
		// input.setAttribute('type', 'text');
		// div.appendChild(input);
		// console.log(input);,
		// console.log(div);
	};

	return (
		<div className='result'>
			{tododata.map((todo) => (
				<section key={todo.id} className='result-content'>
					<div className={`edit edit-${todo.id}`}>
						<button
							className={`btn-${todo.id}`}
							onClick={() => edithandler(todo)}>
							EDIT
						</button>
					</div>
					<div className='todotitle'>
						<p>{todo.title}</p>
						<input
							className={`hidden tite-${todo.id}`}
							type='text'
						/>
					</div>
					<div className='todoname '>
						<p>{todo.desc}</p>{' '}
						<input
							className={`hidden name-${todo.id}`}
							type='text'
						/>
					</div>
					<div className='duedate'>
						<p>{moment(todo.duedate).format('MM DD YYYY')}</p>
						<input
							className={`hidden date-${todo.id}`}
							type='text'
						/>
					</div>
					<div className='tododelete'>
						<button onClick={() => deletetodo(todo.id)}>X</button>
					</div>
				</section>
			))}
		</div>
	);
};
export default TodoList;
