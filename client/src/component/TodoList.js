import React, { useState, useEffect } from 'react';
import api from '../api';
import moment from 'moment';
const TodoList = ({ data }) => {
	useEffect(() => {
		settododata(data);
	}, [data]);
	const [tododata, settododata] = useState([]);
	const [editing, setediting] = useState(false);
	const deletetodo = async (id) => {
		let res = await api.delete(`/delete/${id}`);
		settododata(res.data);
	};
	const checkExpiration = (duedate) => {
		let today = moment();
		let duedatemom = moment(duedate);

		return duedatemom.diff(today, 'days');
	};
	console.log(editing);
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
		const btnedit = document.querySelector(`.edit-btn-${todo.id}`);
		btnedit.style.display = 'none';
		const btnsubmit = document.querySelector(`.submit-btn-${todo.id}`);
		btnsubmit.style.display = 'block';
		// const input = document.createElement('input');
		// input.setAttribute('type', 'text');
		// div.appendChild(input);
		// console.log(input);,
		// console.log(div);
	};
	const submithandler = async (todo) => {
		const inputtitle = document.querySelector(`.tite-${todo.id}`);
		const inputdesc = document.querySelector(`.name-${todo.id}`);
		const inputdate = document.querySelector(`.date-${todo.id}`);
		let id = todo.id;
		let newtitle = inputtitle.value;
		let newdesc = inputdesc.value;
		let newduedate = inputdate.value;
		const body = { newtitle, newdesc, newduedate, id };
		const res = await api.put('/put', JSON.stringify(body));

		inputtitle.style.display = 'none';
		inputdesc.style.display = 'none';
		inputdate.style.display = 'none';
		const btnedit = document.querySelector(`.edit-btn-${todo.id}`);
		btnedit.style.display = 'block';
		const btnsubmit = document.querySelector(`.submit-btn-${todo.id}`);
		btnsubmit.style.display = 'none';
		settododata(res.data);
	};
	return (
		<div className='result'>
			{tododata.map((todo) => (
				<section key={todo.id} className='result-content'>
					<div className={`edit edit-${todo.id}`}>
						<button
							className={`submit-btn-${todo.id} hidden`}
							onClick={() => submithandler(todo)}>
							Submit
						</button>
						<button
							className={`edit-btn-${todo.id}`}
							onClick={() => edithandler(todo)}>
							EDIT
						</button>
					</div>
					<div className=' todotitle'>
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
						<p>
							{checkExpiration(todo.duedate) < 1
								? 'Expired'
								: checkExpiration(todo.duedate)}
						</p>
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
