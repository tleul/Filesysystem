import React from 'react';

import Navbar from './component/Navbar';

import Home from './component/Home';
import './App.css';

function App() {
	return (
		<div className='container-fluid '>
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
