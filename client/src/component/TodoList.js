import React, { useState, useEffect } from 'react';
import api from '../api';
import moment from 'moment';
const TodoList = ({ data }) => {
	const deletetodo = (id) => {
		
		let res = await api.delete(`/delete/${id}`


	} 
	return (
		<div className='result'>
			{data.map((todo) => (
				<section key={todo.id} className='result-content'>
					<div className='todotitle'>{todo.title}</div>
					<div className='todoname'>{todo.desc}</div>
					<div className='duedate'>
						{moment(todo.duedate).format('MM DD YYYY')}
					</div>
					<div className='tododelete'>
						<button onClick={deletetodo(todo.id)}>X</button>
					</div>
				</section>
			))}
		</div>
	);
};
export default TodoList;
